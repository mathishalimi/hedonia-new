import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Cog6ToothIcon } from '@heroicons/react/24/solid';
import { useGameStore } from '../store/gameStore';

export default function SettingsButton() {
  const [isOpen, setIsOpen] = useState(false);
  const { settings, updateSettings } = useGameStore();

  return (
    <>
      <motion.button
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        onClick={() => setIsOpen(true)}
        className="fixed top-4 right-4 p-2 rounded-full bg-white/10 hover:bg-white/20 transition-colors z-50"
      >
        <Cog6ToothIcon className="h-6 w-6 text-white/80" />
      </motion.button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4"
            onClick={() => setIsOpen(false)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="glass-card rounded-xl p-6 max-w-md w-full relative overflow-hidden"
              onClick={e => e.stopPropagation()}
            >
              <div className="absolute inset-0 bg-[url('/patterns/topography.svg')] opacity-5" />
              <div className="absolute inset-0 bg-gradient-to-r from-[var(--primary)] to-[var(--secondary)] opacity-10" />

              <div className="relative z-10 space-y-6">
                <h2 className="text-xl font-bold text-white">Paramètres</h2>

                <div className="space-y-6">
                  <div>
                    <label className="block text-white/80 mb-2">Points pour gagner</label>
                    <div className="flex items-center gap-4">
                      <input
                        type="range"
                        min="150"
                        max="500"
                        step="10"
                        value={settings.pointsToWin}
                        onChange={(e) => updateSettings({ pointsToWin: Number(e.target.value) })}
                        className="w-full accent-[var(--primary)]"
                      />
                      <span className="text-white min-w-[4rem] text-center">
                        {settings.pointsToWin}
                      </span>
                    </div>
                  </div>

                  <div>
                    <label className="block text-white/80 mb-2">Intensité</label>
                    <select
                      value={settings.intensity}
                      onChange={(e) => updateSettings({ intensity: e.target.value as any })}
                      className="w-full bg-white/10 text-white border border-white/20 rounded-lg px-4 py-2"
                    >
                      <option value="soft">Tranquille</option>
                      <option value="medium">Modéré</option>
                      <option value="spicy">Épicé</option>
                      <option value="extreme">Extrême</option>
                    </select>
                  </div>

                  <div className="flex items-center gap-2">
                    <input
                      type="checkbox"
                      id="miniGames"
                      checked={settings.includeMiniGames}
                      onChange={(e) => updateSettings({ includeMiniGames: e.target.checked })}
                      className="w-4 h-4 accent-[var(--primary)]"
                    />
                    <label htmlFor="miniGames" className="text-white/80">
                      Inclure les mini-jeux
                    </label>
                  </div>
                </div>

                <button
                  onClick={() => setIsOpen(false)}
                  className="w-full bg-gradient-to-r from-[var(--primary)] to-[var(--secondary)] text-white py-3 rounded-lg font-semibold hover:opacity-90 transition"
                >
                  Fermer
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}