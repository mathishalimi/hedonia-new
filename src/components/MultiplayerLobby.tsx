import { motion } from 'framer-motion';
import { XMarkIcon } from '@heroicons/react/24/solid';

interface Props {
  onBack: () => void;
}

export default function MultiplayerLobby({ onBack }: Props) {
  return (
    <div className="h-full flex flex-col">
      <div className="flex items-center mb-6">
        <button
          onClick={onBack}
          className="text-white/60 hover:text-white/90 p-2"
        >
          <XMarkIcon className="h-6 w-6" />
        </button>
        <h1 className="text-2xl font-bold text-white ml-2">Mode multijoueur</h1>
      </div>

      <div className="flex-1 flex items-center justify-center">
        <div className="text-center text-white/60">
          <p className="text-xl mb-2">🚧 En développement 🚧</p>
          <p>Le mode multijoueur sera bientôt disponible !</p>
        </div>
      </div>
    </div>
  );
}