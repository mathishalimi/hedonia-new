import { motion, AnimatePresence } from 'framer-motion';
import { XMarkIcon } from '@heroicons/react/24/solid';
import { useGameStore } from '../store/gameStore';
import { GameMode } from '../types/game';

interface Props {
  isOpen: boolean;
  onClose: () => void;
}

export default function SettingsModal({ isOpen, onClose }: Props) {
  const { settings, updateSettings, currentMode } = useGameStore();

  const handlePointsChange = (value: number) => {
    const points = Math.max(150, Math.min(500, value));
    updateSettings({ pointsToWin: points });
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4"
          onClick={onClose}
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            className="glass-card rounded-xl p-6 max-w-md w-full"
            onClick={e => e.stopPropagation()}
          >
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-xl font-bold text-white">Paramètres</h2>
              <button
                onClick={onClose}
                className="text-white/60 hover:text-white/90"
              >
                <XMarkIcon className="h-6 w-6" />
              </button>
            </div>

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
                    onChange={(e) => handlePointsChange(Number(e.target.value))}
                    className="w-full accent-[var(--primary)]"
                  />
                  <input
                    type="number"
                    min="150"
                    max="500"
                    value={settings.pointsToWin}
                    onChange={(e) => handlePointsChange(Number(e.target.value))}
                    className="w-20 bg-white/10 text-white border border-white/20 rounded-lg px-2 py-1 text-center"
                  />
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

              {currentMode === GameMode.Classic && (
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
              )}
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}