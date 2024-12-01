import { useGameStore } from '../store/gameStore';
import { XMarkIcon, CheckIcon } from '@heroicons/react/24/solid';
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import { motion } from 'framer-motion';
import { useSoundEffects } from '../hooks/useSoundEffects';

export default function SwipeableChallenge() {
  const navigate = useNavigate();
  const { play } = useSoundEffects();
  const { 
    currentChallenge, 
    nextChallenge, 
    addPoints, 
    players, 
    currentPlayer,
    gameState,
    settings,
    isGameOver
  } = useGameStore();

  useEffect(() => {
    if (isGameOver) {
      play('win');
      navigate('/game-over');
    }
  }, [isGameOver, navigate, play]);

  const handleSwipe = (dir: 'left' | 'right') => {
    play('swipe');
    
    if (dir === 'right') {
      play('success');
      addPoints(players[currentPlayer], 10);
    } else {
      play('fail');
      addPoints(players[currentPlayer], -5);
    }
    
    setTimeout(() => {
      nextChallenge();
    }, 200);
  };

  if (!currentChallenge) return null;

  return (
    <motion.div 
      initial={{ scale: 0.95, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      className="relative bg-gradient-to-br from-[#1a1a2e] to-[#16213e] rounded-xl shadow-xl h-[85vh] w-full p-4 flex flex-col border border-white/10 overflow-hidden"
    >
      {/* Background pattern */}
      <div className="absolute inset-0 bg-[url('/patterns/topography.svg')] opacity-5" />
      
      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-[var(--primary)] to-[var(--secondary)] opacity-10" />

      <div className="absolute top-3 right-3 z-10">
        <span className="bg-gradient-to-r from-[var(--primary)] to-[var(--secondary)] text-white text-xs font-medium px-2.5 py-1 rounded-full shadow-lg">
          {currentChallenge.type}
        </span>
      </div>

      <div className="flex-1 flex flex-col justify-center items-center text-center px-2 relative z-10">
        <motion.h2 
          initial={{ y: -20 }}
          animate={{ y: 0 }}
          className="text-2xl font-bold text-white mb-3"
        >
          {players[currentPlayer]}
        </motion.h2>
        <p className="text-xl text-white font-medium leading-snug">
          {currentChallenge.text}
        </p>
      </div>

      <div className="flex flex-col items-center space-y-4 relative z-10">
        <p className="text-xs text-white/90 font-medium px-2 text-center">
          ✅ Accepter : +10 points | ❌ Refuser : -5 points + shot
        </p>
        
        <div className="flex justify-center gap-16 mb-2">
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={() => handleSwipe('left')}
            className="p-3 rounded-full bg-gradient-to-r from-red-500 to-red-600 shadow-lg hover:opacity-90 transition"
          >
            <XMarkIcon className="h-6 w-6 text-white" />
          </motion.button>
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={() => handleSwipe('right')}
            className="p-3 rounded-full bg-gradient-to-r from-green-500 to-green-600 shadow-lg hover:opacity-90 transition"
          >
            <CheckIcon className="h-6 w-6 text-white" />
          </motion.button>
        </div>
      </div>

      <div className="absolute top-3 left-3 bg-gradient-to-r from-[var(--primary)] to-[var(--secondary)] rounded-full px-3 py-1 text-xs font-medium text-white shadow-lg z-10">
        {gameState.scores[players[currentPlayer]] || 0} / {settings.pointsToWin} pts
      </div>
    </motion.div>
  );
}