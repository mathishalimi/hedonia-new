import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { XMarkIcon } from '@heroicons/react/24/solid';
import { useGameStore } from '../../store/gameStore';
import { useSoundEffects } from '../../hooks/useSoundEffects';

interface Props {
  onClose: () => void;
  onComplete: (winnerId: string) => void;
}

export default function ShortStraw({ onClose, onComplete }: Props) {
  const { players } = useGameStore();
  const { play } = useSoundEffects();
  const [straws, setStraws] = useState<{ player: string; height: number; selected: boolean }[]>([]);
  const [showInstructions, setShowInstructions] = useState(true);
  const [gameStarted, setGameStarted] = useState(false);
  const [selectedPlayer, setSelectedPlayer] = useState<string | null>(null);
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
        startGame();
      }
    }
  }, [countdown]);

  const startCountdown = () => {
    setShowInstructions(false);
    setCountdown(3);
  };

  const startGame = () => {
    const shortStrawIndex = Math.floor(Math.random() * players.length);
    const initialStraws = players.map((player, index) => ({
      player,
      height: index === shortStrawIndex ? 60 : 100,
      selected: false
    }));
    
    // Shuffle the straws
    for (let i = initialStraws.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [initialStraws[i], initialStraws[j]] = [initialStraws[j], initialStraws[i]];
    }
    
    setStraws(initialStraws);
    setGameStarted(true);
  };

  const selectStraw = (selectedIndex: number) => {
    if (straws[selectedIndex].selected) return;

    play('click');
    
    setStraws(prev => prev.map((straw, index) => ({
      ...straw,
      selected: index === selectedIndex ? true : straw.selected
    })));

    if (straws[selectedIndex].height === 60) {
      play('fail');
      setSelectedPlayer(straws[selectedIndex].player);
      setTimeout(() => {
        onComplete(straws[selectedIndex].player);
      }, 2000);
    } else {
      play('success');
    }
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
          La Courte Paille 🥖
        </h2>

        {showInstructions && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-8 text-white/80"
          >
            <p className="mb-4">Tirez une paille à tour de rôle.</p>
            <p className="text-sm">Celui qui tire la plus courte devra boire ! 🍻</p>
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

        {gameStarted && (
          <div className="flex justify-center items-end space-x-4 mb-8">
            <div className="relative w-full max-w-sm h-64 bg-white/5 rounded-lg p-4">
              <div className="absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-white/10 to-transparent rounded-b-lg" />
              
              <div className="flex justify-around items-end h-full">
                {straws.map((straw, index) => (
                  <motion.div
                    key={index}
                    className="relative"
                    initial={{ y: -20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <motion.button
                      onClick={() => selectStraw(index)}
                      disabled={straw.selected}
                      className={`relative group ${straw.selected ? '' : 'cursor-pointer hover:bg-white/5'} rounded-t-xl transition-colors`}
                      whileHover={{ y: -10 }}
                      whileTap={{ y: 0 }}
                    >
                      {/* Paille visible */}
                      <div className="relative">
                        {/* Base de la paille */}
                        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-8 h-4 bg-yellow-600/80 rounded-t-full" />
                        
                        {/* Corps de la paille non tirée */}
                        {!straw.selected && (
                          <div className="w-4 h-32 mx-auto bg-gradient-to-b from-yellow-200 to-yellow-400 rounded-t-xl shadow-lg" />
                        )}
                        
                        {/* Corps de la paille tirée */}
                        {straw.selected && (
                          <motion.div
                            initial={{ height: '8rem' }}
                            animate={{ height: `${straw.height * 0.32}rem` }}
                            className="w-4 mx-auto bg-gradient-to-b from-yellow-200 to-yellow-400 rounded-t-xl shadow-lg"
                            transition={{ duration: 0.5, ease: "easeOut" }}
                          />
                        )}
                      </div>

                      {/* Étiquette du joueur */}
                      <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 whitespace-nowrap">
                        <span className={`text-sm font-medium transition-colors duration-300 ${
                          straw.selected 
                            ? straw.height === 60 
                              ? 'text-red-400' 
                              : 'text-green-400'
                            : 'text-white/80'
                        }`}>
                          {straw.player}
                        </span>
                      </div>
                    </motion.button>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        )}

        <AnimatePresence>
          {selectedPlayer && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="text-xl font-bold text-[var(--primary)]"
            >
              {selectedPlayer} a tiré la courte paille ! 🍻
            </motion.div>
          )}
        </AnimatePresence>

        {!gameStarted && countdown === null && (
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