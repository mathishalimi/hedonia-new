import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useGameStore } from '../store/gameStore';
import { ArmWrestling, DiceChallenge, TicTacToe, Countdown } from './MiniGames';
import TruthOrDareDuel from './MiniGames/TruthOrDareDuel';
import PenaltyChoice from './PenaltyChoice';
import { useSoundEffects } from '../hooks/useSoundEffects';

interface DuelOption {
  id: string;
  name: string;
  description: string;
  component: React.ComponentType<{
    onClose: () => void;
    onComplete: (winnerId: string) => void;
  }>;
  icon: string;
  gradient: string;
}

const DUELS: DuelOption[] = [
  { 
    id: 'arm-wrestling', 
    name: 'Bras de Fer', 
    description: 'Tapez le plus vite possible pour gagner !',
    component: ArmWrestling,
    icon: '💪',
    gradient: 'from-[#FF4B6E] to-[#7C3AED]'
  },
  { 
    id: 'dice-challenge', 
    name: 'Dé Challenge', 
    description: 'Que le meilleur lanceur gagne !',
    component: DiceChallenge,
    icon: '🎲',
    gradient: 'from-[#7C3AED] to-[#00D4FF]'
  },
  {
    id: 'tic-tac-toe',
    name: 'Morpion',
    description: 'Alignez 3 symboles pour gagner !',
    component: TicTacToe,
    icon: '⭕',
    gradient: 'from-[#00D4FF] to-[#7C3AED]'
  },
  {
    id: 'countdown',
    name: 'Compte à Rebours',
    description: 'Arrêtez à 5 secondes exactement !',
    component: Countdown,
    icon: '⏱️',
    gradient: 'from-[#FF6B6B] to-[#FF4B6E]'
  },
  {
    id: 'truth-or-dare',
    name: 'Action ou Vérité',
    description: 'Choisis ton défi !',
    component: TruthOrDareDuel,
    icon: '🎯',
    gradient: 'from-[#FF4B6E] to-[#7C3AED]'
  }
];

export default function DuelGame() {
  const { 
    gameState, 
    players, 
    addPoints, 
    setPenaltyPhase, 
    setLosingPlayer,
    isPenaltyPhase,
    losingPlayer,
    nextChallenge
  } = useGameStore();
  
  const { play } = useSoundEffects();
  const [selectedDuel, setSelectedDuel] = useState<string | null>(null);
  const [showScores, setShowScores] = useState(true);

  const handleDuelComplete = (winnerId: string) => {
    if (!winnerId) {
      players.forEach(player => {
        addPoints(player, -5);
      });
      nextChallenge();
      return;
    }

    play('success');
    addPoints(winnerId, 15);
    const loserId = players.find(id => id !== winnerId);
    
    if (loserId) {
      play('fail');
      addPoints(loserId, -5);
      setLosingPlayer(loserId);
      setPenaltyPhase(true);
    }
    
    setSelectedDuel(null);
  };

  const handlePenaltyComplete = () => {
    setPenaltyPhase(false);
    setLosingPlayer(null);
    nextChallenge();
  };

  return (
    <div className="min-h-screen bg-[var(--background)] px-3">
      <div className="pt-4 pb-20">
        <AnimatePresence>
          {showScores && (
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="bg-gradient-to-br from-[#1a1a2e] to-[#16213e] rounded-xl p-4 shadow-lg border border-white/10 mb-4"
            >
              <div className="flex justify-between items-center">
                <h3 className="text-lg font-bold text-white">Classement</h3>
                <button 
                  onClick={() => setShowScores(false)}
                  className="text-white/60 hover:text-white/90"
                >
                  ✕
                </button>
              </div>
              <div className="mt-2 space-y-2">
                {players
                  .sort((a, b) => (gameState.scores[b] || 0) - (gameState.scores[a] || 0))
                  .map((player, index) => (
                    <div
                      key={player}
                      className="flex justify-between items-center text-white"
                    >
                      <span>{index + 1}. {player}</span>
                      <span className="font-medium">{gameState.scores[player] || 0} pts</span>
                    </div>
                  ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {!showScores && (
          <button
            onClick={() => setShowScores(true)}
            className="mb-4 px-4 py-2 bg-gradient-to-br from-[#1a1a2e] to-[#16213e] rounded-lg shadow-lg text-white/80 hover:text-white border border-white/10 w-full"
          >
            📊 Voir le classement
          </button>
        )}

        <div className="grid grid-cols-1 gap-3">
          {DUELS.map((duel) => (
            <motion.button
              key={duel.id}
              onClick={() => {
                play('click');
                setSelectedDuel(duel.id);
              }}
              className="relative bg-gradient-to-br from-[#1a1a2e] to-[#16213e] rounded-xl p-4 text-left hover:scale-105 transition overflow-hidden border border-white/10 shadow-lg"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <div className="absolute inset-0 bg-[url('/patterns/topography.svg')] opacity-5" />
              <div className={`absolute inset-0 bg-gradient-to-r ${duel.gradient} opacity-20`} />

              <div className="relative z-10">
                <span className="absolute top-1 right-1 text-3xl">
                  {duel.icon}
                </span>
                <h4 className="text-lg font-bold text-white mb-1">
                  {duel.name}
                </h4>
                <p className="text-white/90 text-sm pr-8">
                  {duel.description}
                </p>
              </div>
            </motion.button>
          ))}
        </div>
      </div>

      <AnimatePresence>
        {selectedDuel && (() => {
          const DuelComponent = DUELS.find(d => d.id === selectedDuel)?.component;
          return DuelComponent ? (
            <DuelComponent 
              onClose={() => setSelectedDuel(null)}
              onComplete={handleDuelComplete}
            />
          ) : null;
        })()}
      </AnimatePresence>

      {isPenaltyPhase && losingPlayer && (
        <PenaltyChoice 
          onComplete={handlePenaltyComplete}
          losingPlayer={losingPlayer}
        />
      )}
    </div>
  );
}