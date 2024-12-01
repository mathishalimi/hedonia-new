import { motion } from 'framer-motion';
import { useGameStore } from '../store/gameStore';
import { GameMode } from '../types/game';
import { ArrowLeftIcon } from '@heroicons/react/24/solid';

interface Props {
  onBack(): void;
  onSelect(): void;
}

const MODES = [
  { 
    mode: GameMode.Classic, 
    label: 'Classique',
    icon: '🎲',
    description: 'Défis fun et gages délirants',
    gradient: 'from-[#FF4B6E] to-[#7C3AED]'
  },
  { 
    mode: GameMode.Naughty, 
    label: 'Coquin',
    icon: '🌶️',
    description: 'Vérités et gages sensuels',
    gradient: 'from-[#FF6B6B] to-[#FF4B6E]'
  },
  { 
    mode: GameMode.Riddles, 
    label: 'Énigmes',
    icon: '🧩',
    description: 'Résous ou bois !',
    gradient: 'from-[#7C3AED] to-[#00D4FF]'
  },
  { 
    mode: GameMode.Trivia, 
    label: 'Culture G',
    icon: '🎓',
    description: 'Quiz ou shot',
    gradient: 'from-[#00D4FF] to-[#7C3AED]'
  },
  { 
    mode: GameMode.Duel, 
    label: 'Duel',
    icon: '⚔️',
    description: 'Mini-jeux en face à face',
    gradient: 'from-[#FF4B6E] to-[#7C3AED]'
  }
];

export default function GameModeSelector({ onBack, onSelect }: Props) {
  const { setGameMode } = useGameStore();

  const handleModeSelect = (mode: GameMode) => {
    setGameMode(mode);
    onSelect();
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
        <h1 className="text-xl font-bold text-white ml-2">Mode de jeu</h1>
      </div>

      <div className="space-y-3">
        {MODES.map(({ mode, label, icon, description, gradient }) => (
          <motion.button
            key={mode}
            onClick={() => handleModeSelect(mode)}
            className="w-full p-4 bg-gradient-to-br from-[#1a1a2e] to-[#16213e] rounded-xl text-left relative overflow-hidden border border-white/10"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            <div className={`absolute inset-0 bg-gradient-to-r ${gradient} opacity-10`} />
            
            <div className="relative z-10 flex items-center space-x-3">
              <span className="text-2xl">{icon}</span>
              <div>
                <span className="font-bold text-white text-base block mb-0.5">
                  {label}
                </span>
                <p className="text-white/80 text-sm">{description}</p>
              </div>
            </div>
          </motion.button>
        ))}
      </div>
    </div>
  );
}