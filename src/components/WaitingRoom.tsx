import { useState } from 'react';
import { motion } from 'framer-motion';
import { useGameStore } from '../store/gameStore';
import { ClipboardIcon } from '@heroicons/react/24/solid';

export default function WaitingRoom() {
  const { roomCode, players } = useGameStore();
  const [copied, setCopied] = useState(false);

  const copyRoomCode = async () => {
    try {
      await navigator.clipboard.writeText(roomCode || '');
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error('Failed to copy:', err);
    }
  };

  return (
    <div className="min-h-screen p-4 flex items-center justify-center">
      <motion.div
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        className="glass-card rounded-xl p-6 max-w-md w-full"
      >
        <div className="text-center space-y-6">
          <h1 className="text-2xl font-bold text-white">Salle d'attente</h1>

          <div className="glass-card rounded-lg p-4">
            <p className="text-sm text-white/60 mb-2">Code de la salle :</p>
            <div className="flex items-center justify-center gap-2">
              <p className="text-3xl font-bold text-white tracking-wider">{roomCode}</p>
              <button
                onClick={copyRoomCode}
                className="p-2 hover:bg-white/10 rounded-lg transition"
                title="Copier le code"
              >
                {copied ? (
                  <span className="text-green-400">✓</span>
                ) : (
                  <ClipboardIcon className="h-5 w-5 text-white/60" />
                )}
              </button>
            </div>
          </div>

          <div className="space-y-4">
            <h2 className="text-xl font-semibold text-white">Joueurs ({players.length}/8)</h2>
            <div className="space-y-2">
              {players.map((player, index) => (
                <motion.div
                  key={player}
                  initial={{ x: -20, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: index * 0.1 }}
                  className="flex items-center justify-between p-3 glass-card rounded-lg"
                >
                  <span className="text-white">{player}</span>
                  {index === 0 && (
                    <span className="text-xs bg-[var(--primary)] px-2 py-1 rounded-full">
                      Hôte
                    </span>
                  )}
                </motion.div>
              ))}
            </div>
          </div>

          {players[0] && (
            <button
              disabled={players.length < 2}
              className="w-full bg-[var(--primary)] text-white py-3 rounded-lg hover:opacity-90 transition disabled:opacity-50"
            >
              {players.length < 2 ? 'En attente de joueurs...' : 'Commencer la partie'}
            </button>
          )}
        </div>
      </motion.div>
    </div>
  );
}