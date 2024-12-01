import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { XMarkIcon } from '@heroicons/react/24/solid';
import { useGameStore } from '../../store/gameStore';
import { useSoundEffects } from '../../hooks/useSoundEffects';

interface Props {
  onClose: () => void;
  onComplete: (winnerId: string) => void;
}

interface PlayerScores {
  [key: string]: number;
}

const MAX_CLICKS = 20;

export default function ArmWrestling({ onClose, onComplete }: Props) {
  const { players } = useGameStore();
  const { play } = useSoundEffects();
  const [player1, setPlayer1] = useState<number>(0);
  const [player2, setPlayer2] = useState<number>(1);
  const [scores, setScores] = useState<PlayerScores>({});
  const [winner, setWinner] = useState<string | null>(null);
  const [countdown, setCountdown] = useState<number>(3);
  const [isPlaying, setIsPlaying] = useState<boolean>(false);

  useEffect(() => {
    let timer: number;
    if (countdown > 0 && isPlaying) {
      timer = window.setTimeout(() => setCountdown(countdown - 1), 1000);
    }
    return () => clearTimeout(timer);
  }, [countdown, isPlaying]);

  const handleTap = (playerIndex: number) => {
    if (!isPlaying || countdown > 0 || winner) return;

    const playerId = players[playerIndex];
    const currentScore = scores[playerId] || 0;

    // Check if player has reached max clicks
    if (currentScore >= MAX_CLICKS) return;

    setScores(prev => {
      const newScore = (prev[playerId] || 0) + 1;
      
      // Check if this tap wins the game
      if (newScore >= MAX_CLICKS) {
        setTimeout(() => {
          setWinner(playerId);
          onComplete(playerId);
        }, 500);
      }
      
      return { ...prev, [playerId]: newScore };
    });
  };

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
      <div className="bg-gradient-to-br from-[#1a1a2e] to-[#16213e] rounded-xl p-8 max-w-md w-full relative overflow-hidden border border-white/10">
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

          <h2 className="text-2xl font-bold text-white mb-4">
            Bras de Fer 💪
          </h2>

          {!isPlaying ? (
            <div className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <select
                  value={player1}
                  onChange={(e) => setPlayer1(Number(e.target.value))}
                  className="p-2 bg-gradient-to-br from-[#1a1a2e] to-[#16213e] border border-white/10 rounded-lg text-white"
                >
                  {players.map((player: string, i: number) => (
                    <option key={player} value={i} disabled={i === player2}>
                      {player}
                    </option>
                  ))}
                </select>
                <select
                  value={player2}
                  onChange={(e) => setPlayer2(Number(e.target.value))}
                  className="p-2 bg-gradient-to-br from-[#1a1a2e] to-[#16213e] border border-white/10 rounded-lg text-white"
                >
                  {players.map((player: string, i: number) => (
                    <option key={player} value={i} disabled={i === player1}>
                      {player}
                    </option>
                  ))}
                </select>
              </div>

              {winner && (
                <div className="text-center py-4">
                  <p className="text-xl font-bold text-[var(--primary)]">
                    🏆 {winner} gagne !
                  </p>
                </div>
              )}

              <button
                onClick={() => {
                  setIsPlaying(true);
                  setCountdown(3);
                  setScores({});
                  setWinner(null);
                }}
                className="w-full bg-gradient-to-r from-[var(--primary)] to-[var(--secondary)] text-white py-3 rounded-lg hover:opacity-90 transition shadow-lg"
              >
                {winner ? 'Rejouer' : 'Commencer'}
              </button>
            </div>
          ) : (
            <div className="space-y-6">
              {countdown > 0 ? (
                <div className="text-center">
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    key={countdown}
                    className="text-6xl font-bold text-[var(--primary)]"
                  >
                    {countdown}
                  </motion.div>
                </div>
              ) : (
                <div className="grid grid-cols-2 gap-8">
                  <div className="space-y-2">
                    <button
                      onClick={() => handleTap(player1)}
                      onTouchStart={() => handleTap(player1)}
                      className="w-full bg-gradient-to-r from-[var(--primary)] to-[var(--secondary)] text-white py-12 rounded-lg hover:opacity-90 active:opacity-75 transition text-xl font-bold touch-none select-none shadow-lg"
                      disabled={scores[players[player1]] >= MAX_CLICKS}
                    >
                      {players[player1]}
                      <div className="text-sm mt-2">
                        {scores[players[player1]] || 0} / {MAX_CLICKS}
                      </div>
                    </button>
                    <motion.div
                      className="bg-white/10 h-4 rounded-full overflow-hidden"
                      initial={{ width: '0%' }}
                      animate={{ width: `${((scores[players[player1]] || 0) / MAX_CLICKS) * 100}%` }}
                      transition={{ duration: 0.2 }}
                    >
                      <div className="bg-[var(--primary)] h-full" />
                    </motion.div>
                  </div>

                  <div className="space-y-2">
                    <button
                      onClick={() => handleTap(player2)}
                      onTouchStart={() => handleTap(player2)}
                      className="w-full bg-gradient-to-r from-[var(--secondary)] to-purple-600 text-white py-12 rounded-lg hover:opacity-90 active:opacity-75 transition text-xl font-bold touch-none select-none shadow-lg"
                      disabled={scores[players[player2]] >= MAX_CLICKS}
                    >
                      {players[player2]}
                      <div className="text-sm mt-2">
                        {scores[players[player2]] || 0} / {MAX_CLICKS}
                      </div>
                    </button>
                    <motion.div
                      className="bg-white/10 h-4 rounded-full overflow-hidden"
                      initial={{ width: '0%' }}
                      animate={{ width: `${((scores[players[player2]] || 0) / MAX_CLICKS) * 100}%` }}
                      transition={{ duration: 0.2 }}
                    >
                      <div className="bg-[var(--secondary)] h-full" />
                    </motion.div>
                  </div>
                </div>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}