import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { XMarkIcon } from '@heroicons/react/24/solid';
import { useGameStore } from '../../store/gameStore';
import { useSoundEffects } from '../../hooks/useSoundEffects';
import { EXTREME_TRUTHS } from '../../data/truthOrDare/truths';
import { EXTREME_DARES } from '../../data/truthOrDare/dares';

interface Props {
  onClose: () => void;
  onComplete: (winnerId: string) => void;
}

export default function TruthOrDareDuel({ onClose, onComplete }: Props) {
  const { players, addPoints, settings } = useGameStore();
  const { play } = useSoundEffects();
  const [currentPlayer, setCurrentPlayer] = useState(0);
  const [selectedOption, setSelectedOption] = useState<'truth' | 'dare' | null>(null);
  const [challenge, setChallenge] = useState<string>('');
  const [completed, setCompleted] = useState(false);
  const [refused, setRefused] = useState(false);

  const handleOptionSelect = (option: 'truth' | 'dare') => {
    play('click');
    setSelectedOption(option);
    const challenges = option === 'truth' ? EXTREME_TRUTHS : EXTREME_DARES;
    setChallenge(challenges[Math.floor(Math.random() * challenges.length)]);
  };

  const handleComplete = () => {
    play('success');
    setCompleted(true);
    // Award points for completing the challenge
    addPoints(players[currentPlayer], 20);

    setTimeout(() => {
      if (currentPlayer < players.length - 1) {
        setCurrentPlayer(prev => prev + 1);
        setSelectedOption(null);
        setChallenge('');
        setCompleted(false);
        setRefused(false);
      } else {
        // Continue game if no one has reached pointsToWin
        setCurrentPlayer(0);
        setSelectedOption(null);
        setChallenge('');
        setCompleted(false);
        setRefused(false);
      }
    }, 1500);
  };

  const handleRefuse = () => {
    play('fail');
    setRefused(true);
    // Penalty for refusing
    addPoints(players[currentPlayer], -10);
    
    setTimeout(() => {
      if (currentPlayer < players.length - 1) {
        setCurrentPlayer(prev => prev + 1);
        setSelectedOption(null);
        setChallenge('');
        setCompleted(false);
        setRefused(false);
      } else {
        setCurrentPlayer(0);
        setSelectedOption(null);
        setChallenge('');
        setCompleted(false);
        setRefused(false);
      }
    }, 1500);
  };

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
      <motion.div
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        className="glass-card rounded-xl p-8 max-w-md w-full text-center relative"
      >
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-white/60 hover:text-white/90"
        >
          <XMarkIcon className="h-6 w-6" />
        </button>

        <h2 className="text-2xl font-bold text-white mb-4">
          Action ou Vérité Extrême 🔥
        </h2>

        <div className="text-center mb-4">
          <p className="text-lg font-medium text-white">
            Tour de {players[currentPlayer]}
          </p>
          <p className="text-sm text-white/60">
            Objectif : {settings.pointsToWin} points
          </p>
        </div>

        {!selectedOption ? (
          <div className="grid grid-cols-2 gap-4">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => handleOptionSelect('truth')}
              className="p-6 bg-gradient-to-r from-[var(--primary)] to-[var(--secondary)] rounded-xl text-white hover:opacity-90 transition shadow-lg"
            >
              <div className="text-3xl mb-2">🤔</div>
              Vérité
              <div className="text-sm mt-1">+20 points</div>
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => handleOptionSelect('dare')}
              className="p-6 bg-gradient-to-r from-[var(--secondary)] to-purple-600 rounded-xl text-white hover:opacity-90 transition shadow-lg"
            >
              <div className="text-3xl mb-2">🎯</div>
              Action
              <div className="text-sm mt-1">+20 points</div>
            </motion.button>
          </div>
        ) : (
          <AnimatePresence mode="wait">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="space-y-6"
            >
              <div className="bg-gradient-to-r from-[var(--primary)] to-[var(--secondary)] p-6 rounded-xl shadow-lg">
                <p className="text-lg font-medium text-white mb-2">
                  {selectedOption === 'truth' ? 'Vérité' : 'Action'} Extrême
                </p>
                <p className="text-xl text-white">
                  {challenge}
                </p>
              </div>

              {!completed && !refused && (
                <div className="grid grid-cols-2 gap-4">
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={handleComplete}
                    className="p-4 bg-green-500 text-white rounded-xl hover:opacity-90 transition shadow-lg"
                  >
                    C'est fait ! 🔥
                    <div className="text-sm mt-1">+20 points</div>
                  </motion.button>
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={handleRefuse}
                    className="p-4 bg-red-500 text-white rounded-xl hover:opacity-90 transition shadow-lg"
                  >
                    Je refuse... 😱
                    <div className="text-sm mt-1">-10 points</div>
                  </motion.button>
                </div>
              )}

              {(completed || refused) && (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="text-xl font-bold"
                >
                  {completed ? (
                    <p className="text-green-400">Légendaire ! 🔥</p>
                  ) : (
                    <p className="text-[var(--primary)]">La honte ! Bois 2 gorgées ! 💀</p>
                  )}
                </motion.div>
              )}
            </motion.div>
          </AnimatePresence>
        )}
      </motion.div>
    </div>
  );
}