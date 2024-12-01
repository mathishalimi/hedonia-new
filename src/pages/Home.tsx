import { useState } from 'react';
import { motion } from 'framer-motion';
import GameModeSelector from '../components/GameModeSelector';
import PlayerSetup from '../components/PlayerSetup';
import SettingsButton from '../components/SettingsButton';

export default function Home() {
  const [showModeSelector, setShowModeSelector] = useState(false);
  const [showPlayerSetup, setShowPlayerSetup] = useState(false);

  return (
    <div className="fixed inset-0 bg-[var(--background)] flex items-center justify-center">
      <SettingsButton />
      
      <div className="w-full min-h-screen flex flex-col items-center justify-center px-4 py-8">
        <div className="w-full max-w-md">
          {showPlayerSetup ? (
            <PlayerSetup onBack={() => {
              setShowPlayerSetup(false);
              setShowModeSelector(true);
            }} />
          ) : showModeSelector ? (
            <GameModeSelector onBack={() => setShowModeSelector(false)} onSelect={() => setShowPlayerSetup(true)} />
          ) : (
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              className="space-y-8"
            >
              <motion.div
                initial={{ y: -20 }}
                animate={{ y: 0 }}
                className="text-center space-y-4"
              >
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ delay: 0.2 }}
                  className="text-7xl mb-4"
                >
                  🍻
                </motion.div>
                <h1 className="text-6xl font-bold mb-2 bg-gradient-to-r from-[var(--primary)] to-[var(--secondary)] text-transparent bg-clip-text">
                  Hedonia
                </h1>
                <p className="text-2xl text-white/90 font-medium">Le jeu à boire ultime</p>
              </motion.div>

              <div className="bg-[#1a1a2e] rounded-xl p-6 space-y-4 relative overflow-hidden shadow-xl border border-white/5">
                <div className="absolute inset-0 bg-[url('/patterns/topography.svg')] opacity-5" />
                <div className="absolute inset-0 bg-[var(--primary)] opacity-5" />

                <div className="relative z-10 space-y-4">
                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    onClick={() => setShowModeSelector(true)}
                    className="w-full p-6 bg-gradient-to-r from-[var(--primary)] to-[var(--secondary)] rounded-xl text-left hover:opacity-90 transition shadow-lg"
                  >
                    <div className="flex items-center space-x-4">
                      <span className="text-4xl">🎮</span>
                      <div>
                        <span className="text-xl font-bold text-white block">Partie locale</span>
                        <span className="text-lg text-white/90">Jouez ensemble sur le même appareil</span>
                      </div>
                    </div>
                  </motion.button>

                  <div className="w-full p-6 bg-white/5 rounded-xl text-left opacity-50 cursor-not-allowed border border-white/5">
                    <div className="flex items-center space-x-4">
                      <span className="text-4xl">🌐</span>
                      <div>
                        <span className="text-xl font-bold text-white block">Partie en ligne</span>
                        <span className="text-lg text-white/90">Bientôt disponible</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          )}
        </div>
      </div>
    </div>
  );
}