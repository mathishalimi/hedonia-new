import { useState, useEffect } from 'react';
import { useGameStore } from '../store/gameStore';
import { motion, AnimatePresence } from 'framer-motion';
import { useSoundEffects } from '../hooks/useSoundEffects';

const DARES = [
  "Imite un animal pendant 30 secondes",
  "Chante une chanson en yaourt",
  "Fais 5 pompes",
  "Raconte une blague nulle",
  "Danse la macarena",
  "Fais le tour de la pièce en marchant comme un crabe",
  "Parle avec un accent pendant 2 minutes",
  "Fais une grimace et garde-la pendant 30 secondes",
  "Fais semblant d'être une poule",
  "Récite l'alphabet à l'envers"
];

export default function RiddleGame() {
  const { currentChallenge, addPoints, players, currentPlayer, nextChallenge, gameState } = useGameStore();
  const { play } = useSoundEffects();
  const [showAnswer, setShowAnswer] = useState(false);
  const [userAnswer, setUserAnswer] = useState('');
  const [timeLeft, setTimeLeft] = useState(30);
  const [showPenaltyChoice, setShowPenaltyChoice] = useState(false);
  const [selectedPenalty, setSelectedPenalty] = useState<'drink' | 'dare' | null>(null);
  const [dare, setDare] = useState<string>('');

  useEffect(() => {
    if (!showAnswer && timeLeft > 0) {
      const timer = setInterval(() => {
        setTimeLeft((prev) => prev - 1);
      }, 1000);
      return () => clearInterval(timer);
    } else if (timeLeft === 0 && !showAnswer) {
      handleTimeout();
    }
  }, [timeLeft, showAnswer]);

  useEffect(() => {
    setTimeLeft(30);
    setShowAnswer(false);
    setUserAnswer('');
    setShowPenaltyChoice(false);
    setSelectedPenalty(null);
    setDare('');
  }, [currentChallenge]);

  if (!currentChallenge) return null;

  const question = currentChallenge.text.split('(')[0].trim();
  const answer = currentChallenge.text.split('(')[1]?.replace(')', '').trim().toLowerCase() || '';

  const checkAnswer = (userAttempt: string): boolean => {
    const normalizedUserAnswer = userAttempt.toLowerCase().trim();
    const normalizedCorrectAnswer = answer.toLowerCase().trim();

    if (normalizedUserAnswer === normalizedCorrectAnswer) return true;

    const userWords = normalizedUserAnswer.split(/\s+/);
    const answerWords = normalizedCorrectAnswer.split(/\s+/);

    const matchingWords = userWords.filter(word => 
      answerWords.some(answerWord => 
        answerWord === word || 
        (word.length > 3 && answerWord.includes(word)) ||
        (answerWord.length > 3 && word.includes(answerWord))
      )
    );

    return matchingWords.length >= Math.ceil(answerWords.length / 2);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const isCorrect = checkAnswer(userAnswer);
    
    if (!isCorrect) {
      play('fail');
      setShowPenaltyChoice(true);
      addPoints(players[currentPlayer], -5);
    } else {
      play('success');
      addPoints(players[currentPlayer], 15);
    }
    
    setShowAnswer(true);
  };

  const handleTimeout = () => {
    play('fail');
    setShowPenaltyChoice(true);
    addPoints(players[currentPlayer], -10);
    setShowAnswer(true);
  };

  const handlePenaltyChoice = (choice: 'drink' | 'dare') => {
    play('click');
    setSelectedPenalty(choice);
    if (choice === 'dare') {
      setDare(DARES[Math.floor(Math.random() * DARES.length)]);
    }
  };

  const handleNext = () => {
    play('click');
    nextChallenge();
  };

  return (
    <div className="min-h-screen bg-[var(--background)] p-4">
      <motion.div
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        className="glass-card rounded-xl p-6 mb-6"
      >
        <div className="flex justify-between items-center">
          <div>
            <h3 className="text-xl font-bold text-white">
              {players[currentPlayer]}
            </h3>
            <p className="text-white/80">
              Score: {gameState.scores[players[currentPlayer]] || 0} points
            </p>
          </div>
          <motion.div 
            className="text-3xl font-bold text-gradient"
            animate={{ scale: timeLeft <= 5 ? [1, 1.1, 1] : 1 }}
            transition={{ duration: 0.5, repeat: timeLeft <= 5 ? Infinity : 0 }}
          >
            {timeLeft}s
          </motion.div>
        </div>
      </motion.div>

      <motion.div
        initial={{ scale: 0.95, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        className="glass-card rounded-xl p-6 space-y-6"
      >
        <div className="space-y-4">
          <h3 className="text-2xl font-bold text-gradient">Énigme</h3>
          <p className="text-xl text-white/90">{question}</p>
          
          {!showAnswer ? (
            <form onSubmit={handleSubmit} className="space-y-4">
              <input
                type="text"
                value={userAnswer}
                onChange={(e) => setUserAnswer(e.target.value)}
                placeholder="Votre réponse..."
                className="input-primary w-full"
                autoFocus
              />
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                type="submit"
                className="btn-primary w-full"
              >
                Valider
              </motion.button>
            </form>
          ) : (
            <AnimatePresence mode="wait">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                className="space-y-6"
              >
                <div className="glass-card rounded-lg p-6 space-y-4">
                  <p className="text-xl font-medium text-white">
                    Réponse : <span className="text-gradient">{answer}</span>
                  </p>
                  <p className="text-lg text-white/80">
                    {checkAnswer(userAnswer)
                      ? '✨ Bravo ! +15 points'
                      : timeLeft === 0
                      ? '⏰ Temps écoulé ! -10 points'
                      : '❌ Raté ! -5 points'}
                  </p>

                  {showPenaltyChoice && !selectedPenalty && (
                    <div className="mt-6">
                      <p className="text-white font-medium mb-4">Choisis ta pénalité :</p>
                      <div className="grid grid-cols-2 gap-4">
                        <motion.button
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                          onClick={() => handlePenaltyChoice('drink')}
                          className="btn-primary"
                        >
                          Boire 2 gorgées
                        </motion.button>
                        <motion.button
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                          onClick={() => handlePenaltyChoice('dare')}
                          className="btn-secondary"
                        >
                          Faire un gage
                        </motion.button>
                      </div>
                    </div>
                  )}

                  {selectedPenalty && (
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="glass-card rounded-lg p-6 space-y-2"
                    >
                      <p className="text-[var(--primary)] font-medium">Ta pénalité :</p>
                      <p className="text-xl text-white">
                        {selectedPenalty === 'drink' ? "Bois 2 gorgées" : dare}
                      </p>
                    </motion.div>
                  )}
                </div>

                {(!showPenaltyChoice || selectedPenalty) && (
                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    onClick={handleNext}
                    className="btn-primary w-full"
                  >
                    Énigme suivante
                  </motion.button>
                )}
              </motion.div>
            </AnimatePresence>
          )}
        </div>
      </motion.div>
    </div>
  );
}