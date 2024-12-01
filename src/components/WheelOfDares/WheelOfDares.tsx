import { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { useGameStore } from '../../store/gameStore';
import { getDaresByMode } from './dares';
import useSound from 'use-sound';
import Confetti from '../Confetti';

export default function WheelOfDares() {
  const { 
    currentMode, 
    isPremium, 
    gameState, 
    players, 
    currentPlayer,
    nextChallenge
  } = useGameStore();
  
  const [isSpinning, setIsSpinning] = useState(false);
  const [selectedDare, setSelectedDare] = useState<string | null>(null);
  const [rotation, setRotation] = useState(0);
  const [showWheel, setShowWheel] = useState(false);
  const wheelRef = useRef<HTMLDivElement>(null);
  
  const [playSpinSound] = useSound('/sounds/wheel-spin.mp3');
  const [playWinSound] = useSound('/sounds/wheel-stop.mp3');

  const dares = getDaresByMode(currentMode);
  const segments = dares.length;
  const segmentAngle = 360 / segments;

  useEffect(() => {
    if (gameState.roundNumber % 5 === 0 && gameState.roundNumber !== 0) {
      setShowWheel(true);
    }
  }, [gameState.roundNumber]);

  const spinWheel = () => {
    if (isSpinning) return;

    setIsSpinning(true);
    playSpinSound();

    const spins = 5;
    const randomSegment = Math.floor(Math.random() * segments);
    const finalRotation = spins * 360 + randomSegment * segmentAngle;

    setRotation(finalRotation);

    setTimeout(() => {
      setIsSpinning(false);
      playWinSound();
      setSelectedDare(dares[randomSegment]);
    }, 4000);
  };

  const handleComplete = () => {
    setShowWheel(false);
    setSelectedDare(null);
    setRotation(0);
    nextChallenge();
  };

  if (!showWheel) return null;

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.8 }}
      className="fixed inset-0 flex items-center justify-center bg-black/50 z-50 p-4"
    >
      <div className="bg-gradient-to-br from-[#1a1a2e] to-[#16213e] rounded-xl p-6 max-w-sm w-full text-center relative overflow-hidden border border-white/10">
        {/* Background pattern */}
        <div className="absolute inset-0 bg-[url('/patterns/topography.svg')] opacity-5" />
        
        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-[var(--primary)] to-[var(--secondary)] opacity-20" />

        <div className="relative z-10">
          <Confetti />
          
          <h2 className="text-xl font-bold text-white mb-4">
            Roulette des Gages ! 🎲
          </h2>
          
          {!selectedDare ? (
            <>
              <div
                ref={wheelRef}
                className="relative w-32 h-32 mx-auto mb-4"
                style={{
                  transform: `rotate(${rotation}deg)`,
                  transition: 'transform 4s cubic-bezier(0.2, 0.8, 0.3, 1)'
                }}
              >
                {dares.map((_, index) => (
                  <div
                    key={index}
                    className="absolute w-full h-full"
                    style={{
                      transform: `rotate(${index * segmentAngle}deg)`,
                      transformOrigin: '50% 50%',
                      clipPath: 'polygon(50% 50%, 50% 0%, 100% 0%, 100% 25%)'
                    }}
                  >
                    <div
                      className="w-full h-full"
                      style={{
                        backgroundColor: `hsl(${index * (360 / segments)}, 70%, 60%)`
                      }}
                    />
                  </div>
                ))}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-6 h-6 rounded-full bg-white shadow-xl" />
                </div>
              </div>
              
              <button
                onClick={spinWheel}
                disabled={isSpinning}
                className="bg-gradient-to-r from-[var(--primary)] to-[var(--secondary)] text-white px-6 py-2 rounded-lg font-semibold hover:opacity-90 transition disabled:opacity-50 text-sm shadow-lg"
              >
                {isSpinning ? 'La roue tourne...' : 'Tourner la roue !'}
              </button>
            </>
          ) : (
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              className="space-y-4"
            >
              <div className="bg-gradient-to-r from-[var(--primary)] to-[var(--secondary)] p-4 rounded-lg shadow-lg">
                <p className="text-lg font-medium text-white">
                  {selectedDare}
                </p>
                <p className="text-white/90 mt-2 text-sm">
                  Pour : {players[currentPlayer]}
                </p>
              </div>
              
              <button
                onClick={handleComplete}
                className="w-full bg-gradient-to-br from-[#1a1a2e] to-[#16213e] text-white px-6 py-3 rounded-lg font-semibold hover:opacity-90 transition text-sm border border-white/10 shadow-lg"
              >
                C'est fait !
              </button>
            </motion.div>
          )}

          {isPremium && (
            <button
              onClick={() => {/* Ouvrir modal de personnalisation */}}
              className="absolute top-2 right-2 text-white/60 hover:text-white/90"
            >
              ⚙️
            </button>
          )}
        </div>
      </div>
    </motion.div>
  );
}