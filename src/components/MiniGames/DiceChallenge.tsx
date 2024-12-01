import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { XMarkIcon } from '@heroicons/react/24/solid';
import { useGameStore } from '../../store/gameStore';
import { useSoundEffects } from '../../hooks/useSoundEffects';

interface Props {
  onClose: () => void;
  onComplete: (winnerId: string) => void;
}

interface DiceFace {
  dots: { x: number; y: number }[];
  rotateX: number;
  rotateY: number;
  rotateZ: number;
}

const DICE_FACES: Record<number, DiceFace> = {
  1: {
    dots: [{ x: 50, y: 50 }],
    rotateX: 0,
    rotateY: 0,
    rotateZ: 0
  },
  2: {
    dots: [{ x: 20, y: 20 }, { x: 80, y: 80 }],
    rotateX: 0,
    rotateY: -90,
    rotateZ: 0
  },
  3: {
    dots: [{ x: 20, y: 20 }, { x: 50, y: 50 }, { x: 80, y: 80 }],
    rotateX: -90,
    rotateY: 0,
    rotateZ: 0
  },
  4: {
    dots: [{ x: 20, y: 20 }, { x: 20, y: 80 }, { x: 80, y: 20 }, { x: 80, y: 80 }],
    rotateX: 90,
    rotateY: 0,
    rotateZ: 0
  },
  5: {
    dots: [{ x: 20, y: 20 }, { x: 20, y: 80 }, { x: 50, y: 50 }, { x: 80, y: 20 }, { x: 80, y: 80 }],
    rotateX: 0,
    rotateY: 90,
    rotateZ: 0
  },
  6: {
    dots: [
      { x: 20, y: 20 }, { x: 20, y: 50 }, { x: 20, y: 80 },
      { x: 80, y: 20 }, { x: 80, y: 50 }, { x: 80, y: 80 }
    ],
    rotateX: 180,
    rotateY: 0,
    rotateZ: 0
  }
};

export default function DiceChallenge({ onClose, onComplete }: Props) {
  const { players } = useGameStore();
  const { play } = useSoundEffects();
  const [rolls, setRolls] = useState<Record<string, number>>({});
  const [currentPlayer, setCurrentPlayer] = useState(0);
  const [isRolling, setIsRolling] = useState(false);
  const [showResult, setShowResult] = useState(false);
  const [isTie, setIsTie] = useState(false);
  const [diceRotation, setDiceRotation] = useState({ x: 0, y: 0, z: 0 });
  const [currentValue, setCurrentValue] = useState(1);

  const rollDice = async () => {
    if (isRolling) return;
    
    setIsRolling(true);
    play('roll');

    let rollCount = 0;
    const totalRolls = 20;
    const rollInterval = setInterval(() => {
      rollCount++;
      
      // Random rotation for realistic effect
      setDiceRotation({
        x: Math.random() * 720 + 360,
        y: Math.random() * 720 + 360,
        z: Math.random() * 720 + 360
      });

      // Random value during animation
      const randomValue = Math.floor(Math.random() * 6) + 1;
      setCurrentValue(randomValue);

      if (rollCount >= totalRolls) {
        clearInterval(rollInterval);
        const finalValue = Math.floor(Math.random() * 6) + 1;
        const face = DICE_FACES[finalValue];
        
        // Set final rotation
        setDiceRotation({
          x: face.rotateX,
          y: face.rotateY,
          z: face.rotateZ
        });
        setCurrentValue(finalValue);
        
        setRolls(prev => ({
          ...prev,
          [players[currentPlayer]]: finalValue
        }));

        play('success');

        if (currentPlayer < players.length - 1) {
          setTimeout(() => {
            setCurrentPlayer(prev => prev + 1);
            setIsRolling(false);
          }, 1000);
        } else {
          setTimeout(() => {
            setShowResult(true);
            const scores = { ...rolls, [players[currentPlayer]]: finalValue };
            const minScore = Math.min(...Object.values(scores));
            
            // Check for tie
            const losers = Object.entries(scores).filter(([_, score]) => score === minScore);
            
            if (losers.length > 1) {
              setIsTie(true);
              onComplete('');
            } else {
              const winner = players.find(player => player !== losers[0][0]);
              if (winner) {
                onComplete(winner);
              }
            }
          }, 1000);
        }
      }
    }, 100);
  };

  const renderDiceFace = (value: number) => {
    const face = DICE_FACES[value];
    return (
      <div className="relative w-full h-full bg-white rounded-xl shadow-inner">
        {face.dots.map((dot, index) => (
          <div
            key={index}
            className="absolute w-4 h-4 bg-black rounded-full transform -translate-x-1/2 -translate-y-1/2"
            style={{ left: `${dot.x}%`, top: `${dot.y}%` }}
          />
        ))}
      </div>
    );
  };

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
      <div className="glass-card rounded-xl p-8 max-w-md w-full text-center relative">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-white/60 hover:text-white/90"
        >
          <XMarkIcon className="h-6 w-6" />
        </button>

        <h2 className="text-2xl font-bold text-white mb-4">
          Dé Challenge 🎲
        </h2>

        <p className="text-sm text-white/60 mt-2">
          Le plus petit nombre boit ! En cas d'égalité, tout le monde boit ! 🍻
        </p>

        {!showResult ? (
          <div className="space-y-6">
            <div className="text-center mb-8">
              <p className="text-lg text-white/80">
                Tour de {players[currentPlayer]}
              </p>
            </div>

            <div className="perspective-1000 h-48 w-48 mx-auto mb-8">
              <motion.div
                className="relative w-full h-full preserve-3d"
                animate={{
                  rotateX: diceRotation.x,
                  rotateY: diceRotation.y,
                  rotateZ: diceRotation.z
                }}
                transition={{
                  duration: isRolling ? 0.1 : 0.5,
                  ease: isRolling ? "linear" : "easeOut"
                }}
              >
                {renderDiceFace(currentValue)}
              </motion.div>
            </div>

            <button
              onClick={rollDice}
              disabled={isRolling}
              className="w-full bg-[var(--primary)] text-white py-3 rounded-lg hover:opacity-90 transition disabled:opacity-50"
            >
              {isRolling ? 'Lancement...' : 'Lancer le dé !'}
            </button>

            <div className="grid grid-cols-2 gap-4 mt-8">
              {Object.entries(rolls).map(([player, value]) => (
                <div key={player} className="glass-card p-4 rounded-lg">
                  <p className="text-white font-medium mb-2">{player}</p>
                  <div className="w-20 h-20 mx-auto">
                    {renderDiceFace(value)}
                  </div>
                </div>
              ))}
            </div>
          </div>
        ) : (
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            className="space-y-4"
          >
            <div className="text-center">
              <p className="text-xl font-bold text-white mb-2">
                Résultats finaux
              </p>
              <div className="grid grid-cols-2 gap-4">
                {Object.entries(rolls).map(([player, value]) => (
                  <div key={player} className="glass-card p-4 rounded-lg">
                    <p className="text-white font-medium mb-2">{player}</p>
                    <div className="w-20 h-20 mx-auto">
                      {renderDiceFace(value)}
                    </div>
                  </div>
                ))}
              </div>
              {isTie && (
                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="text-xl font-bold text-[var(--primary)] mt-4"
                >
                  Égalité ! Tout le monde boit ! 🍻
                </motion.p>
              )}
            </div>
          </motion.div>
        )}
      </div>
    </div>
  );
}