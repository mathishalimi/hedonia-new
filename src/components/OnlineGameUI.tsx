import { useGameStore } from '../store/gameStore';

export default function OnlineGameUI() {
  const { currentMode } = useGameStore();

  return (
    <div className="min-h-screen bg-[var(--background)] p-4">
      <h1 className="text-2xl font-bold text-white mb-4">
        Mode {currentMode}
      </h1>
      <p className="text-white/80">
        Partie en ligne en cours de développement...
      </p>
    </div>
  );
}