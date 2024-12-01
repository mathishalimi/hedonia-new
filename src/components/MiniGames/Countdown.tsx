import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { XMarkIcon } from '@heroicons/react/24/solid';
import { useGameStore } from '../../store/gameStore';
import { useSoundEffects } from '../../hooks/useSoundEffects';

interface Props {
  onClose: () => void;
  onComplete: (winnerId: string) => void;
}

const TARGET_TIME = 5; // 5 seconds target

export default function Countdown({ onClose, onComplete }: Props) {
  const { players } = useGameStore();
  const { play } = useSoundEffects();
  const [currentPlayer, setCurrentPlayer] = useState(0);
  const [counting, setCounting] = useState(false);
  const [elapsedTime, setElapsedTime] = useState(0);
  const [showResult, setShowResult] = useState(false);
  const [startTime, setStartTime] = useState<number | null>(null);
  const [showInstructions, setShowInstructions] = useState(true);
  const [countdown, setCountdown] = useState<number | null>(null);

  useEffect(() => {
    if (countdown !== null) {
      if (countdown > 0) {
        const timer = setTimeout(() => {
          setCountdown(countdown - 1);
          play('countdown');
        }, 1000);
        return () => clearTimeout(timer);
      } else {
        setShowInstructions(false);
      }
    }
  }, [countdown]);

  useEffect(() => {
    let interval: NodeJS.Timeout;
    
    if (counting && startTime) {
      interval = setInterval(() => {
        const now = Date.now();
        setElapsedTime((now - startTime) / 1000);
      }, 10);
    }

    return () => clearInterval(interval);
  }, [counting, startTime]);

  const startCountdown = () => {
    setCountdown(3);
  };

  const handleStart = () => {
    setCounting(true);
    setStartTime(Date.now());
    play('click');
  };

  const handleStop = () => {
    setCounting(false);
    const finalTime = elapsedTime;
    const difference = Math.abs(TARGET_TIME - finalTime);
    
    setShowResult(true);
    play('success');

    if (difference > 0.3) {
      setTimeout(() => {
        onComplete(players[currentPlayer]);
      }, 2000);
    } else {
      setTimeout(() => {
        setCurrentPlayer((prev) => (prev + 1) % players.length);
        setShowResult(false);
        setElapsedTime(0);
        setStartTime(null);
      }, 2000);
    }
  };

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
      <div className="bg-gradient-to-br from-[#1a1a2e] to-[#16213e] rounded-xl p-8 max-w-md w-full text-center relative overflow-hidden border border-white/10">
        {/* Background pattern */}
        <div className="absolute inset-0 bg-[url('/patterns/topography.svg')] opacity-5" />
        
        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-[var(--primary)] to-[var(--secondary)] opacity-20" />

        <div className="relative z-10">
          <button
            onClick={onClose}
            className="absolute top-4 right-4 text-white/60 hover:text-white/90"
          >
            <XMarkIcon className="h-6 w-6" />
          </button>

          <h2 className="text-2xl font-bold text-white mb-8">
            Compte à Rebours ⏱️
          </h2>

          {showInstructions && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="mb-8 text-white/80"
            >
              <p className="mb-4">Arrêtez le chrono à exactement {TARGET_TIME} secondes !</p>
              <p className="text-sm">Une erreur de plus de 0.3 seconde = Shot 🍻</p>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={startCountdown}
                className="mt-6 bg-gradient-to-r from-[var(--primary)] to-[var(--secondary)] text-white px-8 py-3 rounded-lg font-semibold hover:opacity-90 transition shadow-lg"
              >
                Commencer !
              </motion.button>
            </motion.div>
          )}

          {countdown !== null && countdown > 0 && (
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

          {!showInstructions && (
            <>
              <div className="text-center mb-6">
                <p className="text-lg font-medium text-white">
                  Tour de {players[currentPlayer]}
                </p>
              </div>

              <div className="space-y-8">
                <motion.div
                  animate={counting ? {
                    scale: [1, 1.1, 1],
                    transition: { repeat: Infinity, duration: 1 }
                  } : {}}
                  className="text-6xl font-bold bg-gradient-to-r from-[var(--primary)] to-[var(--secondary)] text-transparent bg-clip-text"
                >
                  {elapsedTime.toFixed(2)}s
                </motion.div>

                {!counting && !showResult && (
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={handleStart}
                    className="bg-gradient-to-r from-[var(--primary)] to-[var(--secondary)] text-white px-8 py-3 rounded-lg font-semibold hover:opacity-90 transition shadow-lg"
                  >
                    Démarrer
                  </motion.button>
                )}

                {counting && (
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={handleStop}
                    className="bg-gradient-to-r from-[var(--secondary)] to-purple-600 text-white px-8 py-3 rounded-lg font-semibold hover:opacity-90 transition shadow-lg"
                  >
                    Stop !
                  </motion.button>
                )}

                <AnimatePresence>
                  {showResult && (
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -20 }}
                      className="text-xl font-bold"
                    >
                      {Math.abs(TARGET_TIME - elapsedTime) <= 0.3 ? (
                        <span className="text-green-400">Parfait ! Au suivant !</span>
                      ) : (
                        <span className="text-[var(--primary)]">Raté ! Tu bois ! 🍻</span>
                      )}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
}