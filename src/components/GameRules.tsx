import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useGameStore } from '../store/gameStore';
import { GameMode } from '../types/game';

interface Props {
  mode: GameMode;
}

export default function GameRules({ mode }: Props) {
  const { setGameMode } = useGameStore();
  const [selectedTab, setSelectedTab] = useState<GameMode>(mode);
  
  useEffect(() => {
    setGameMode(selectedTab);
  }, [selectedTab, setGameMode]);

  const rules = {
    [GameMode.Classic]: [
      { emoji: "🎲", text: "Accepte le défi ou bois !" },
      { emoji: "⭐", text: "Les défis rapportent 10 points" },
      { emoji: "❌", text: "Refuser coûte 5 points" },
      { emoji: "🎮", text: "Mini-jeux tous les 5 tours" },
      { emoji: "🏆", text: "Premier à 150 points gagne" }
    ],
    [GameMode.Naughty]: [
      { emoji: "🌶️", text: "Défis plus coquins" },
      { emoji: "🎯", text: "Même système de points" },
      { emoji: "🔞", text: "Contenu réservé aux +18" },
      { emoji: "⭐", text: "Mode premium requis" },
      { emoji: "🤝", text: "Restez respectueux !" }
    ],
    [GameMode.Riddles]: [
      { emoji: "🧩", text: "Résous l'énigme ou bois !" },
      { emoji: "⏱️", text: "30 secondes par énigme" },
      { emoji: "✅", text: "Bonne réponse = 15 points" },
      { emoji: "❌", text: "Mauvaise réponse = -5 points" },
      { emoji: "⏰", text: "Temps écoulé = -10 points" }
    ],
    [GameMode.Trivia]: [
      { emoji: "📚", text: "Réponds à la question ou bois !" },
      { emoji: "🎯", text: "4 choix possibles" },
      { emoji: "✅", text: "Bonne réponse = 15 points" },
      { emoji: "❌", text: "Mauvaise réponse = -5 points" },
      { emoji: "📈", text: "Questions de plus en plus dures" }
    ],
    [GameMode.Duel]: [
      { emoji: "⚔️", text: "Affronte un autre joueur !" },
      { emoji: "🏆", text: "Le gagnant = 15 points" },
      { emoji: "💀", text: "Le perdant = -5 points" },
      { emoji: "🎮", text: "Mini-jeux variés" },
      { emoji: "🎯", text: "Pénalité pour le perdant" }
    ]
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      className="bg-gradient-to-br from-[#1a1a2e] to-[#16213e] rounded-xl p-4 mb-4 relative overflow-hidden border border-white/10"
    >
      <div className="absolute inset-0 bg-[url('/patterns/topography.svg')] opacity-5" />
      <div className="absolute inset-0 bg-gradient-to-r from-[var(--primary)] to-[var(--secondary)] opacity-10" />
      
      <div className="relative z-10">
        <h2 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
          <span className="text-2xl">📖</span>
          Règles du Jeu
        </h2>
        
        <div className="flex gap-2 mb-4 overflow-x-auto pb-2 -mx-2 px-2 scrollbar-hide">
          {Object.values(GameMode).map((gameMode) => (
            <button
              key={gameMode}
              onClick={() => setSelectedTab(gameMode)}
              className={`px-3 py-1.5 rounded-lg whitespace-nowrap transition-all text-sm ${
                selectedTab === gameMode
                  ? 'bg-gradient-to-r from-[var(--primary)] to-[var(--secondary)] text-white shadow-lg'
                  : 'bg-white/10 text-white/60 hover:bg-white/20'
              }`}
            >
              {gameMode === GameMode.Classic ? '🎲 Classique' :
               gameMode === GameMode.Naughty ? '🌶️ Coquin' :
               gameMode === GameMode.Riddles ? '🧩 Énigmes' :
               gameMode === GameMode.Trivia ? '📚 Culture G' : '⚔️ Duel'}
            </button>
          ))}
        </div>

        <AnimatePresence mode="wait">
          <motion.div
            key={selectedTab}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            className="space-y-2"
          >
            {rules[selectedTab].map((rule, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1 }}
                className="flex items-center gap-3 p-2 bg-white/5 rounded-lg hover:bg-white/10 transition-colors"
              >
                <span className="text-2xl">{rule.emoji}</span>
                <span className="text-white/90 text-sm">{rule.text}</span>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>
      </div>
    </motion.div>
  );
}