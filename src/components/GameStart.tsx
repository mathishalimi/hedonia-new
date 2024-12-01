import { motion } from 'framer-motion';
import { useGameStore } from '../store/gameStore';
import { useSoundEffects } from '../hooks/useSoundEffects';
import FloatingEmoji from './decorations/FloatingEmoji';

export default function GameStart() {
  const { nextChallenge } = useGameStore();
  const { play } = useSoundEffects();

  const handleStart = () => {
    play('success');
    nextChallenge();
  };

  const decorations = ['🍻', '🥂', '✨'];

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="min-h-screen bg-[var(--background)] p-4 flex items-center justify-center"
    >
      <div className="w-full max-w-md">
        <motion.div
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          className="glass-card rounded-xl p-8 space-y-8 relative overflow-hidden"
        >
          {/* Background pattern */}
          <div className="absolute inset-0 bg-[url('/patterns/topography.svg')] opacity-5" />
          
          {/* Solid color background */}
          <div className="absolute inset-0 bg-gradient-to-br from-[var(--primary)] to-[var(--secondary)] opacity-10" />
          
          {/* Floating decorations */}
          {decorations.map((emoji, index) => (
            <FloatingEmoji
              key={`decoration-${index}`}
              emoji={emoji}
              index={index}
              config={{
                xRange: 20,
                yRange: 10,
                duration: 8,
                rotationRange: 180
              }}
              style={{
                top: `${15 + (index * 25)}%`,
                left: `${15 + (index * 25)}%`,
              }}
              className="text-5xl opacity-20"
            />
          ))}
          
          <div className="relative z-10 space-y-8">
            <div className="text-center">
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 0.2 }}
                className="text-8xl mb-6"
              >
                🍻
              </motion.div>
              <motion.div 
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="bg-white/10 backdrop-blur-sm rounded-xl p-8 shadow-lg transform hover:scale-105 transition-transform duration-300 border border-white/20"
              >
                <h2 className="text-2xl font-medium text-white/80 mb-2">
                  Avant de commencer...
                </h2>
                <p className="text-4xl font-bold text-white">
                  Tout le monde trinque !
                </p>
              </motion.div>
            </div>

            <motion.button
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={handleStart}
              className="w-full bg-white text-[var(--primary)] py-4 rounded-xl font-bold hover:bg-white/90 transition shadow-lg text-xl"
            >
              C'est parti ! 🎉
            </motion.button>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
}