import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useGameStore } from '../store/gameStore';

export default function TriviaGame() {
  const { currentChallenge, addPoints, players, currentPlayer, nextChallenge, gameState } = useGameStore();
  const [showAnswer, setShowAnswer] = useState(false);
  const [selectedAnswer, setSelectedAnswer] = useState<string>('');
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
    setSelectedAnswer('');
    setShowPenaltyChoice(false);
    setSelectedPenalty(null);
    setDare('');
  }, [currentChallenge]);

  if (!currentChallenge || !currentChallenge.choices) return null;

  const handleAnswerSelect = (answer: string) => {
    if (showAnswer) return;
    setSelectedAnswer(answer);
    
    const isCorrect = answer === currentChallenge.answer;
    
    if (isCorrect) {
      addPoints(players[currentPlayer], 15);
    } else {
      setShowPenaltyChoice(true);
      addPoints(players[currentPlayer], -5);
    }
    
    setShowAnswer(true);
  };

  const handleTimeout = () => {
    setShowPenaltyChoice(true);
    addPoints(players[currentPlayer], -10);
    setShowAnswer(true);
  };

  const handlePenaltyChoice = (choice: 'drink' | 'dare') => {
    setSelectedPenalty(choice);
    if (choice === 'dare') {
      const dares = [
        "Imite un animal pendant 30 secondes",
        "Chante une chanson en yaourt",
        "Fais 5 pompes",
        "Raconte une blague nulle",
        "Danse la macarena"
      ];
      setDare(dares[Math.floor(Math.random() * dares.length)]);
    }
  };

  const handleNext = () => {
    nextChallenge();
  };

  return (
    <div className="min-h-screen bg-[var(--background)] px-3">
      <div className="pt-4 pb-20">
        {/* Score et Joueur */}
        <motion.div
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          className="bg-gradient-to-br from-[#1a1a2e] to-[#16213e] rounded-xl p-4 mb-4 border border-white/10 relative overflow-hidden"
        >
          {/* Background pattern */}
          <div className="absolute inset-0 bg-[url('/patterns/topography.svg')] opacity-5" />
          
          {/* Gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-r from-[var(--primary)] to-[var(--secondary)] opacity-20" />

          <div className="relative z-10 flex justify-between items-center">
            <div>
              <h3 className="text-xl font-bold text-white">
                Tour de {players[currentPlayer]}
              </h3>
              <p className="text-white/80">
                Score: {gameState.scores[players[currentPlayer]] || 0} points
              </p>
            </div>
            <div className="text-3xl font-bold bg-gradient-to-r from-[var(--primary)] to-[var(--secondary)] text-transparent bg-clip-text">
              {timeLeft}s
            </div>
          </div>
        </motion.div>

        {/* Question */}
        <motion.div
          initial={{ scale: 0.95, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          className="bg-gradient-to-br from-[#1a1a2e] to-[#16213e] rounded-xl p-6 relative overflow-hidden border border-white/10"
        >
          {/* Background pattern */}
          <div className="absolute inset-0 bg-[url('/patterns/topography.svg')] opacity-5" />
          
          {/* Gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-r from-[var(--primary)] to-[var(--secondary)] opacity-20" />

          <div className="relative z-10">
            <h3 className="text-2xl font-bold text-white mb-6">Culture Générale</h3>
            
            <div className="space-y-6">
              <p className="text-xl text-white mb-8">{currentChallenge.text}</p>
              
              <div className="grid grid-cols-1 gap-3">
                {currentChallenge.choices.map((choice, index) => (
                  <motion.button
                    key={index}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    onClick={() => handleAnswerSelect(choice)}
                    disabled={showAnswer}
                    className={`p-4 rounded-xl transition-all duration-300 shadow-lg border ${
                      showAnswer
                        ? choice === currentChallenge.answer
                          ? 'bg-gradient-to-r from-green-500 to-green-600 border-green-400'
                          : selectedAnswer === choice
                          ? 'bg-gradient-to-r from-red-500 to-red-600 border-red-400'
                          : 'bg-gradient-to-br from-[#1a1a2e] to-[#16213e] border-white/10 opacity-50'
                        : 'bg-gradient-to-r from-[var(--primary)] to-[var(--secondary)] hover:opacity-90 border-white/10'
                    }`}
                  >
                    <span className="text-white font-medium">{choice}</span>
                  </motion.button>
                ))}
              </div>

              {showAnswer && (
                <motion.div
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  className="space-y-4"
                >
                  <div className="bg-gradient-to-br from-[#1a1a2e] to-[#16213e] rounded-xl p-6 border border-white/10 relative overflow-hidden">
                    {/* Background pattern */}
                    <div className="absolute inset-0 bg-[url('/patterns/topography.svg')] opacity-5" />
                    
                    {/* Gradient overlay */}
                    <div className="absolute inset-0 bg-gradient-to-r from-[var(--primary)] to-[var(--secondary)] opacity-20" />

                    <div className="relative z-10">
                      <p className="text-lg text-white">
                        {selectedAnswer === currentChallenge.answer
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
                              whileHover={{ scale: 1.02 }}
                              whileTap={{ scale: 0.98 }}
                              onClick={() => handlePenaltyChoice('drink')}
                              className="p-4 bg-gradient-to-r from-red-500 to-red-600 rounded-xl text-white hover:opacity-90 transition shadow-lg"
                            >
                              Boire 2 gorgées
                            </motion.button>
                            <motion.button
                              whileHover={{ scale: 1.02 }}
                              whileTap={{ scale: 0.98 }}
                              onClick={() => handlePenaltyChoice('dare')}
                              className="p-4 bg-gradient-to-r from-[var(--secondary)] to-purple-600 rounded-xl text-white hover:opacity-90 transition shadow-lg"
                            >
                              Faire un gage
                            </motion.button>
                          </div>
                        </div>
                      )}

                      {selectedPenalty && (
                        <div className="mt-6 bg-gradient-to-r from-[var(--primary)] to-[var(--secondary)] p-4 rounded-xl shadow-lg">
                          <p className="text-white font-medium mb-2">Ta pénalité :</p>
                          <p className="text-white text-lg">
                            {selectedPenalty === 'drink' ? "Bois 2 gorgées" : dare}
                          </p>
                        </div>
                      )}
                    </div>
                  </div>

                  {(!showPenaltyChoice || selectedPenalty) && (
                    <motion.button
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      onClick={handleNext}
                      className="w-full p-4 bg-gradient-to-r from-[var(--primary)] to-[var(--secondary)] text-white rounded-xl hover:opacity-90 transition shadow-lg font-medium"
                    >
                      Question suivante
                    </motion.button>
                  )}
                </motion.div>
              )}
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}