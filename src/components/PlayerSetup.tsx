import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { useGameStore } from '../store/gameStore';
import { ArrowLeftIcon } from '@heroicons/react/24/solid';
import GameRules from './GameRules';

interface Props {
  onBack: () => void;
}

export default function PlayerSetup({ onBack }: Props) {
  const navigate = useNavigate();
  const { addPlayer, players, startGame, removePlayer, currentMode } = useGameStore();
  const [newPlayer, setNewPlayer] = useState('');
  const [error, setError] = useState('');

  const handleAddPlayer = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newPlayer.trim()) {
      setError('Veuillez entrer un nom');
      return;
    }
    if (players.includes(newPlayer.trim())) {
      setError('Ce joueur existe déjà');
      return;
    }
    addPlayer(newPlayer.trim());
    setNewPlayer('');
    setError('');
  };

  const handleStartGame = () => {
    if (players.length < 2) {
      setError('Il faut au moins 2 joueurs');
      return;
    }
    startGame();
    navigate('/game');
  };

  return (
    <div className="flex flex-col w-full">
      <div className="flex items-center mb-6">
        <button
          onClick={onBack}
          className="text-white/80 hover:text-white p-2 rounded-xl hover:bg-white/10 transition"
        >
          <ArrowLeftIcon className="h-6 w-6" />
        </button>
        <h1 className="text-xl font-bold text-white ml-2">Joueurs</h1>
      </div>

      <AnimatePresence>
        {players.length === 0 && (
          <GameRules mode={currentMode} />
        )}
      </AnimatePresence>

      <div className="space-y-4">
        {error && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-red-500/20 text-red-500 p-3 rounded-xl text-sm font-medium"
          >
            {error}
          </motion.div>
        )}

        <form onSubmit={handleAddPlayer} className="flex gap-2">
          <input
            type="text"
            value={newPlayer}
            onChange={(e) => setNewPlayer(e.target.value)}
            className="flex-1 p-3 bg-gradient-to-br from-[#1a1a2e] to-[#16213e] rounded-xl text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-[var(--primary)] border border-white/10 text-base"
            placeholder="Nom du joueur"
          />
          <button
            type="submit"
            className="px-4 bg-gradient-to-r from-[var(--primary)] to-[var(--secondary)] text-white rounded-xl hover:opacity-90 font-medium shadow-lg text-xl"
          >
            +
          </button>
        </form>

        <div className="space-y-2 max-h-[50vh] overflow-y-auto">
          {players.map((player, index) => (
            <motion.div
              key={player}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.1 }}
              className="flex items-center justify-between p-3 bg-gradient-to-br from-[#1a1a2e] to-[#16213e] rounded-xl border border-white/10"
            >
              <span className="text-white font-medium">{player}</span>
              <button
                onClick={() => removePlayer(player)}
                className="text-white/60 hover:text-white/90 p-2 hover:bg-white/10 rounded-lg transition"
              >
                ✕
              </button>
            </motion.div>
          ))}
        </div>

        <button
          onClick={handleStartGame}
          disabled={players.length < 2}
          className="w-full p-3 bg-gradient-to-r from-[var(--primary)] to-[var(--secondary)] text-white rounded-xl hover:opacity-90 disabled:opacity-50 font-medium transition-all shadow-lg text-base mt-4"
        >
          {players.length < 2 ? 'Ajoutez des joueurs' : 'Commencer'}
        </button>
      </div>
    </div>
  );
}