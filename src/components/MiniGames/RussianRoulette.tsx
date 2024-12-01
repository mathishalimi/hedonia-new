import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { XMarkIcon } from '@heroicons/react/24/solid';
import { useGameStore } from '../../store/gameStore';
import { useSoundEffects } from '../../hooks/useSoundEffects';

interface Props {
  onClose: () => void;
  onComplete: (winnerId: string) => void;
}

export default function RussianRoulette({ onClose, onComplete }: Props) {
  const { players } = useGameStore();
  const { play } = useSoundEffects();
  const [shots, setShots] = useState<boolean[]>([]);
  const [currentPlayer, setCurrentPlayer] = useState(0);
  const [selectedShot, setSelectedShot] = useState<number | null>(null);
  const [showResult, setShowResult] = useState(false);
  const [countdown, setCountdown] = useState<number | null>(null);
  const [showInstructions, setShowInstructions] = useState(true);

  useEffect(() => {
    if (countdown !== null) {
      if (countdown > 0) {
        const timer = setTimeout(() => {
          setCountdown(countdown - 1);
          play('countdown');
        }, 1000);
        return () => clearTimeout(timer);
      } else {
        startGame();
      }
    }
  }, [countdown]);

  const startCountdown = () => {
    setShowInstructions(false);
    setCountdown(3);
  };

  const startGame = () => {
    // Initialiser 6 shots dont un seul est "mortel"
    const initialShots = Array(6).fill(false);
    initialShots[Math.floor(Math.random() * 6)] = true;
    setShots(initialShots);
  };

  const handleShotSelect = (index: number) => {
    if (selectedShot !== null) return;
    
    play('roll');
    setSelectedShot(index);

    setTimeout(() => {
      if (shots[index]) {
        // Shot mortel trouvé !
        play('fail');
        setShowResult(true);
        setTimeout(() => {
          onComplete(players[currentPlayer]);
        }, 2000);
      } else {
        // Continuer au prochain joueur
        play('success');
        setCurrentPlayer((prev) => (prev + 1) % players.length);
        setSelectedShot(null);
      }
    }, 1000);
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

        <h2 className="text-2xl font-bold text-white mb-8">
          Roulette Russe des Shots 🎲
        </h2>

        {showInstructions && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-8 text-white/80"
          >
            <p className="mb-4">6 shots, un seul est mortel !</p>
            <p className="text-sm">Choisissez prudemment... 🍻</p>
          </motion.div>
        )}

        {countdown !== null && (
          <motion.div
            key={countdown}
            initial={{ scale: 0.5, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 1.5, opacity: 0 }}
            className="text-6xl font-bold text-[var(--primary)] mb-8"
          >
            {countdown}
          </motion.div>
        )}

        {shots.length > 0 && (
          <>
            <div className="text-center mb-6">
              <p className="text-lg font-medium text-white">
                Tour de {players[currentPlayer]}
              </p>
            </div>

            <div className="grid grid-cols-3 gap-4 mb-8">
              {shots.map((isDeadly, index) => (
                <motion.button
                  key={index}
                  onClick={() => handleShotSelect(index)}
                  disabled={selectedShot !== null}
                  className={`aspect-square rounded-lg ${
                    selectedShot === index
                      ? isDeadly
                        ? 'bg-red-500/20 border-red-500'
                        : 'bg-green-500/20 border-green-500'
                      : 'bg-white/10 hover:bg-white/20 border-white/20'
                  } border-2 transition-colors relative overflow-hidden`}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <div className="absolute inset-0 flex items-center justify-center">
                    <span className="text-3xl">
                      {selectedShot === index ? (
                        isDeadly ? '💀' : '🍺'
                      ) : '🥃'}
                    </span>
                  </div>
                  
                  {selectedShot === index && (
                    <motion.div
                      initial={{ y: '100%' }}
                      animate={{ y: 0 }}
                      className={`absolute inset-0 ${
                        isDeadly ? 'bg-red-500/20' : 'bg-green-500/20'
                      }`}
                    />
                  )}
                </motion.button>
              ))}
            </div>

            <AnimatePresence>
              {showResult && (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  className="text-xl font-bold text-[var(--primary)]"
                >
                  {players[currentPlayer]} a trouvé le shot mortel ! 💀
                </motion.div>
              )}
            </AnimatePresence>
          </>
        )}

        {!shots.length && countdown === null && (
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={startCountdown}
            className="bg-gradient-to-r from-[var(--primary)] to-[var(--secondary)] text-white px-8 py-3 rounded-lg font-semibold hover:opacity-90 transition"
          >
            Commencer !
          </motion.button>
        )}
      </motion.div>
    </div>
  );
}