import { useMemo } from 'react';
import { useGameStore } from '../../store/gameStore';
import { GameMode } from '../../types/game';
import FloatingEmoji from './FloatingEmoji';

export default function FloatingDecorations() {
  const { currentMode } = useGameStore();
  
  const decorations = useMemo(() => {
    switch (currentMode) {
      case GameMode.Classic:
        return ['🎈', '✨'];
      case GameMode.Naughty:
        return ['💋', '✨'];
      case GameMode.Riddles:
        return ['🎯', '🧩'];
      case GameMode.Trivia:
        return ['📚', '💭'];
      case GameMode.Duel:
        return ['⚔️', '🎯'];
      default:
        return ['🎈', '✨'];
    }
  }, [currentMode]);

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden">
      {decorations.map((emoji, index) => (
        <FloatingEmoji
          key={`decoration-${index}`}
          emoji={emoji}
          index={index}
          config={{
            xRange: 40,
            yRange: 20,
            duration: 12,
            rotationRange: 360
          }}
          style={{
            top: `${20 + (index * 18) % 60}%`,
            left: `${15 + (index * 22) % 70}%`,
          }}
        />
      ))}
      
      {/* Gradient overlays for depth */}
      <div className="absolute inset-0 bg-gradient-to-t from-[var(--background)] via-transparent to-transparent opacity-50" />
      <div className="absolute inset-0 bg-gradient-to-b from-[var(--background)] via-transparent to-transparent opacity-50" />
    </div>
  );
}