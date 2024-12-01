import { useState } from 'react';
import { motion } from 'framer-motion';
import { useGameStore } from '../store/gameStore';
import { GameMode } from '../types/game';

export default function GameSettings() {
  const { settings, updateSettings, currentMode } = useGameStore();
  const [localPoints, setLocalPoints] = useState(settings.pointsToWin);

  const handlePointsChange = (value: number) => {
    const points = Math.max(20, Math.min(500, value));
    setLocalPoints(points);
    updateSettings({ pointsToWin: points });
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="glass-card rounded-xl p-6 space-y-6"
    >
      <h2 className="text-xl font-bold text-white">Paramètres de la partie</h2>

      <div className="space-y-4">
        <div>
          <label className="block text-white/80 mb-2">Points pour gagner</label>
          <div className="flex items-center gap-4">
            <input
              type="range"
              min="20"
              max="500"
              step="10"
              value={localPoints}
              onChange={(e) => handlePointsChange(Number(e.target.value))}
              className="w-full accent-[var(--primary)]"
            />
            <input
              type="number"
              min="20"
              max="500"
              value={localPoints}
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
  );
}