import { useState } from 'react';
import { motion } from 'framer-motion';
import { useGameStore } from '../store/gameStore';
import { GameMode } from '../types/game';
import { getNaughtyModePenalty } from '../utils/naughtyModeHelpers';
import { getClassicPenalty } from '../utils/classicModeHelpers';

interface Props {
  onComplete: () => void;
  losingPlayer: string;
  miniGame?: string;
}

export default function PenaltyChoice({ onComplete, losingPlayer, miniGame }: Props) {
  const { isPenaltyPhase, currentMode, gameState } = useGameStore();
  const [selectedPenalty, setSelectedPenalty] = useState<'drink' | 'dare' | null>(null);
  const [dare, setDare] = useState<string>('');

  if (!isPenaltyPhase) return null;

  const progress = gameState.totalPoints / gameState.scores[losingPlayer];
  const shotsCount = Math.min(1 + Math.floor(progress * 3), 4);

  const handleDrink = () => {
    onComplete();
  };

  const handleDare = () => {
    let penalty = '';
    
    if (currentMode === GameMode.Naughty) {
      const naughtyPenalties = getNaughtyModePenalty(progress);
      penalty = naughtyPenalties[Math.floor(Math.random() * naughtyPenalties.length)];
    } else {
      penalty = getClassicPenalty(progress);
    }

    setDare(penalty);
    setSelectedPenalty('dare');
  };

  const handleDareComplete = () => {
    setSelectedPenalty(null);
    setDare('');
    onComplete();
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4"
    >
      <div className="bg-gradient-to-br from-[#1a1a2e] to-[#16213e] rounded-xl p-6 max-w-md w-full text-center relative overflow-hidden border border-white/10">
        <div className="absolute inset-0 bg-[url('/patterns/topography.svg')] opacity-5" />
        <div className="absolute inset-0 bg-gradient-to-r from-[var(--primary)] to-[var(--secondary)] opacity-10" />

        <div className="relative z-10">
          <h2 className="text-xl font-bold text-white mb-6">
            {losingPlayer}, tu as perdu ! Choisis ta punition :
          </h2>

          {selectedPenalty ? (
            <div className="space-y-4">
              <div className="bg-gradient-to-br from-[#1a1a2e] to-[#16213e] rounded-lg p-4 border border-white/10">
                <p className="text-lg font-medium text-white">
                  {dare}
                </p>
              </div>
              <button
                onClick={handleDareComplete}
                className="w-full bg-gradient-to-r from-[var(--primary)] to-[var(--secondary)] text-white py-3 rounded-lg hover:opacity-90 transition shadow-lg"
              >
                C'est fait !
              </button>
            </div>
          ) : (
            <div className="grid grid-cols-2 gap-4">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={handleDrink}
                className="p-4 bg-gradient-to-r from-red-500 to-red-600 text-white rounded-lg hover:opacity-90 transition shadow-lg"
              >
                <div className="text-2xl mb-2">🍺</div>
                Boire {shotsCount} gorgée{shotsCount > 1 ? 's' : ''}
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={handleDare}
                className="p-4 bg-gradient-to-r from-[var(--secondary)] to-purple-600 text-white rounded-lg hover:opacity-90 transition shadow-lg"
              >
                <div className="text-2xl mb-2">🎲</div>
                Faire un gage
              </motion.button>
            </div>
          )}
        </div>
      </div>
    </motion.div>
  );
}