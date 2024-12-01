import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { XMarkIcon } from '@heroicons/react/24/solid';
import { useGameStore } from '../../store/gameStore';
import { useSoundEffects } from '../../hooks/useSoundEffects';

interface Props {
  onClose: () => void;
  onComplete: (winnerId: string) => void;
}

export default function FingerChooser({ onClose, onComplete }: Props) {
  const { players } = useGameStore();
  const { play } = useSoundEffects();
  const [isSpinning, setIsSpinning] = useState(false);
  const [selectedPlayer, setSelectedPlayer] = useState<string | null>(null);
  const [rotation, setRotation] = useState(0);
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
        startSpin();
      }
    }
  }, [countdown]);

  const startCountdown = () => {
    setShowInstructions(false);
    setCountdown(3);
  };

  const startSpin = () => {
    setIsSpinning(true);
    play('roll');

    // Random number of full rotations (5-8) plus the angle to the selected player
    const fullRotations = (Math.floor(Math.random() * 4) + 5) * 360;
    const playerIndex = Math.floor(Math.random() * players.length);
    const playerAngle = (playerIndex * 360) / players.length;
    const finalRotation = fullRotations + playerAngle;

    setRotation(finalRotation);

    // Wait for animation to complete
    setTimeout(() => {
      setIsSpinning(false);
      setSelectedPlayer(players[playerIndex]);
      play('success');
      
      // Wait 2 seconds before completing
      setTimeout(() => {
        onComplete(players[playerIndex]);
      }, 2000);
    }, 4000);
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
          Finger Chooser 👆
        </h2>

        {showInstructions && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-8 text-white/80"
          >
            <p className="mb-4">Le doigt va tourner et désigner aléatoirement un joueur !</p>
            <p className="text-sm">Préparez-vous à boire si vous êtes choisi 🍻</p>
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

        <div className="relative w-72 h-72 mx-auto mb-8">
          {/* Background circle */}
          <div className="absolute inset-0 rounded-full border-4 border-white/10" />
          
          <motion.div
            className="absolute inset-0"
            animate={{ rotate: rotation }}
            transition={{
              duration: 4,
              ease: [0.32, 0.72, 0.35, 1.02]
            }}
          >
            {players.map((player, index) => {
              const angle = (index * 360) / players.length;
              return (
                <motion.div
                  key={player}
                  className="absolute top-1/2 left-1/2 -translate-x-1/2 origin-bottom"
                  style={{
                    rotate: angle,
                    height: '50%'
                  }}
                >
                  <div className="transform -translate-x-1/2 -translate-y-full">
                    <motion.div 
                      className="text-5xl"
                      animate={{ scale: selectedPlayer === player ? [1, 1.2, 1] : 1 }}
                      transition={{ duration: 0.5, repeat: selectedPlayer === player ? Infinity : 0 }}
                    >
                      👆
                    </motion.div>
                    <div className={`text-white font-medium mt-2 whitespace-nowrap transition-all duration-300 ${
                      selectedPlayer === player ? 'text-[var(--primary)] scale-110' : ''
                    }`}>
                      {player}
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </motion.div>
          
          {/* Center point with glow effect */}
          <div className="absolute top-1/2 left-1/2 w-6 h-6 bg-[var(--primary)] rounded-full -translate-x-1/2 -translate-y-1/2 shadow-lg shadow-[var(--primary)]/50" />
        </div>

        <AnimatePresence>
          {selectedPlayer && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="text-xl font-bold text-[var(--primary)]"
            >
              {selectedPlayer} doit boire ! 🍻
            </motion.div>
          )}
        </AnimatePresence>

        {!isSpinning && countdown === null && !selectedPlayer && (
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={startCountdown}
            className="bg-gradient-to-r from-[var(--primary)] to-[var(--secondary)] text-white px-8 py-3 rounded-lg font-semibold hover:opacity-90 transition"
          >
            Lancer la roue !
          </motion.button>
        )}
      </motion.div>
    </div>
  );
}