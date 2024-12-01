import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { XMarkIcon } from '@heroicons/react/24/solid';
import { useGameStore } from '../../store/gameStore';
import { useSoundEffects } from '../../hooks/useSoundEffects';

interface Props {
  onClose: () => void;
  onComplete: (winnerId: string) => void;
}

const CHOICES = [
  { symbol: '✊', label: 'Pierre', beats: 'Ciseaux' },
  { symbol: '✋', label: 'Feuille', beats: 'Pierre' },
  { symbol: '✌️', label: 'Ciseaux', beats: 'Feuille' }
] as const;

type Choice = typeof CHOICES[number];
type GameState = 'COUNTDOWN' | 'CHOOSING' | 'REVEAL' | 'ROUND_RESULT' | 'GAME_OVER';

const ROUNDS_TO_WIN = 2; // Best of 3
const COUNTDOWN_TIME = 3;
const CHOICE_TIME = 5;

export default function RockPaperScissors({ onClose, onComplete }: Props) {
  const { players } = useGameStore();
  const { play } = useSoundEffects();
  const [gameState, setGameState] = useState<GameState>('COUNTDOWN');
  const [scores, setScores] = useState<Record<string, number>>({
    [players[0]]: 0,
    [players[1]]: 0
  });
  const [countdown, setCountdown] = useState(COUNTDOWN_TIME);
  const [choiceTimer, setChoiceTimer] = useState(CHOICE_TIME);
  const [currentRound, setCurrentRound] = useState(1);
  const [choices, setChoices] = useState<Record<string, Choice | null>>({
    [players[0]]: null,
    [players[1]]: null
  });
  const [roundWinner, setRoundWinner] = useState<string | null>(null);

  useEffect(() => {
    let timer: NodeJS.Timeout;
    
    if (gameState === 'COUNTDOWN' && countdown > 0) {
      timer = setTimeout(() => {
        play('countdown');
        setCountdown(prev => prev - 1);
      }, 1000);
    } else if (gameState === 'COUNTDOWN' && countdown === 0) {
      setGameState('CHOOSING');
      setChoiceTimer(CHOICE_TIME);
    }

    return () => clearTimeout(timer);
  }, [countdown, gameState]);

  useEffect(() => {
    let timer: NodeJS.Timeout;
    
    if (gameState === 'CHOOSING' && choiceTimer > 0) {
      timer = setTimeout(() => {
        setChoiceTimer(prev => prev - 1);
      }, 1000);
    } else if (gameState === 'CHOOSING' && choiceTimer === 0) {
      handleRoundEnd();
    }

    return () => clearTimeout(timer);
  }, [choiceTimer, gameState]);

  const determineWinner = (choice1: Choice, choice2: Choice): string | null => {
    if (choice1.label === choice2.label) return null;
    return choice1.beats === choice2.label ? players[0] : players[1];
  };

  const handleChoice = (playerIndex: number, choice: Choice) => {
    play('click');
    const playerId = players[playerIndex];
    setChoices(prev => ({ ...prev, [playerId]: choice }));

    // Check if both players have made their choices
    const otherPlayerId = players[playerIndex === 0 ? 1 : 0];
    if (choices[otherPlayerId]) {
      handleRoundEnd();
    }
  };

  const handleRoundEnd = () => {
    setGameState('REVEAL');
    const player1Choice = choices[players[0]];
    const player2Choice = choices[players[1]];

    // If a player didn't choose, they lose
    if (!player1Choice && player2Choice) {
      handleRoundWinner(players[1]);
    } else if (!player2Choice && player1Choice) {
      handleRoundWinner(players[0]);
    } else if (!player1Choice && !player2Choice) {
      handleTie();
    } else if (player1Choice && player2Choice) {
      const winner = determineWinner(player1Choice, player2Choice);
      if (winner) {
        handleRoundWinner(winner);
      } else {
        handleTie();
      }
    }
  };

  const handleRoundWinner = (winner: string) => {
    play('success');
    setRoundWinner(winner);
    setScores(prev => ({
      ...prev,
      [winner]: prev[winner] + 1
    }));

    setTimeout(() => {
      if (scores[winner] + 1 >= ROUNDS_TO_WIN) {
        setGameState('GAME_OVER');
        play('win');
        onComplete(winner);
      } else {
        startNewRound();
      }
    }, 2000);
  };

  const handleTie = () => {
    play('fail');
    setRoundWinner(null);
    setTimeout(() => {
      startNewRound();
    }, 2000);
  };

  const startNewRound = () => {
    setCurrentRound(prev => prev + 1);
    setChoices({ [players[0]]: null, [players[1]]: null });
    setGameState('COUNTDOWN');
    setCountdown(COUNTDOWN_TIME);
    setRoundWinner(null);
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
          Pierre Feuille Ciseaux ✌️
        </h2>

        <div className="flex justify-between items-center mb-8">
          <div className="text-center">
            <p className="text-lg font-bold text-white">{players[0]}</p>
            <div className="flex gap-1 justify-center mt-1">
              {Array.from({ length: ROUNDS_TO_WIN }).map((_, i) => (
                <div
                  key={i}
                  className={`w-3 h-3 rounded-full ${
                    i < scores[players[0]]
                      ? 'bg-[var(--primary)]'
                      : 'bg-white/20'
                  }`}
                />
              ))}
            </div>
          </div>
          <div className="text-xl font-bold text-white/60">
            Round {currentRound}
          </div>
          <div className="text-center">
            <p className="text-lg font-bold text-white">{players[1]}</p>
            <div className="flex gap-1 justify-center mt-1">
              {Array.from({ length: ROUNDS_TO_WIN }).map((_, i) => (
                <div
                  key={i}
                  className={`w-3 h-3 rounded-full ${
                    i < scores[players[1]]
                      ? 'bg-[var(--secondary)]'
                      : 'bg-white/20'
                  }`}
                />
              ))}
            </div>
          </div>
        </div>

        {gameState === 'COUNTDOWN' && (
          <motion.div
            key={countdown}
            initial={{ scale: 0.5, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 1.5, opacity: 0 }}
            className="text-6xl font-bold text-[var(--primary)] mb-8"
          >
            {countdown}
          </motion.div>
        )}

        {(gameState === 'CHOOSING' || gameState === 'REVEAL') && (
          <>
            {gameState === 'CHOOSING' && (
              <div className="text-2xl font-bold text-white mb-4">
                {choiceTimer}s
              </div>
            )}
            
            <div className="grid grid-cols-2 gap-8">
              {[0, 1].map((playerIndex) => (
                <div key={playerIndex} className="space-y-4">
                  <p className="text-lg font-bold text-white">
                    {players[playerIndex]}
                  </p>
                  {gameState === 'REVEAL' ? (
                    <motion.div
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      className="text-6xl"
                    >
                      {choices[players[playerIndex]]?.symbol || '❌'}
                    </motion.div>
                  ) : (
                    <div className="grid grid-cols-3 gap-2">
                      {CHOICES.map((choice, index) => (
                        <motion.button
                          key={index}
                          whileHover={{ scale: 1.1 }}
                          whileTap={{ scale: 0.9 }}
                          onClick={() => handleChoice(playerIndex, choice)}
                          disabled={choices[players[playerIndex]] !== null}
                          className={`h-16 flex items-center justify-center text-2xl ${
                            choices[players[playerIndex]]?.label === choice.label
                              ? 'bg-[var(--primary)] text-white'
                              : 'bg-white/10 hover:bg-white/20'
                          } rounded-lg transition disabled:opacity-50`}
                          title={choice.label}
                        >
                          {choice.symbol}
                        </motion.button>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </>
        )}

        {roundWinner !== undefined && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="mt-8 text-xl font-bold text-white"
          >
            {roundWinner === null ? (
              "Égalité ! Rejouez !"
            ) : (
              `${roundWinner} gagne la manche !`
            )}
          </motion.div>
        )}
      </div>
    </div>
  );
}