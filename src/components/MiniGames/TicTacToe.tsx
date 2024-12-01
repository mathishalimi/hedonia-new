import { useState } from 'react';
import { motion } from 'framer-motion';
import { XMarkIcon } from '@heroicons/react/24/solid';
import { useGameStore } from '../../store/gameStore';
import { useSoundEffects } from '../../hooks/useSoundEffects';

interface Props {
  onClose: () => void;
  onComplete: (winnerId: string) => void;
}

type Board = (string | null)[];

const WINNING_COMBINATIONS = [
  [0, 1, 2], [3, 4, 5], [6, 7, 8], // Lignes
  [0, 3, 6], [1, 4, 7], [2, 5, 8], // Colonnes
  [0, 4, 8], [2, 4, 6]             // Diagonales
];

export default function TicTacToe({ onClose, onComplete }: Props) {
  const { players } = useGameStore();
  const { play } = useSoundEffects();
  const [board, setBoard] = useState<Board>(Array(9).fill(null));
  const [currentPlayer, setCurrentPlayer] = useState(0);
  const [winner, setWinner] = useState<string | null>(null);
  const [isDraw, setIsDraw] = useState(false);

  const symbols = { [players[0]]: '❌', [players[1]]: '⭕' };

  const determineWinner = (boardState: Board) => {
    for (const combo of WINNING_COMBINATIONS) {
      const [a, b, c] = combo;
      if (
        boardState[a] &&
        boardState[a] === boardState[b] &&
        boardState[a] === boardState[c]
      ) {
        return players[boardState[a] === symbols[players[0]] ? 0 : 1];
      }
    }
    return null;
  };

  const checkDraw = (boardState: Board) => {
    return boardState.every(cell => cell !== null);
  };

  const handleCellClick = (index: number) => {
    if (board[index] || winner || isDraw) return;

    play('click');
    const newBoard = [...board];
    newBoard[index] = symbols[players[currentPlayer]];
    setBoard(newBoard);

    const newWinner = determineWinner(newBoard);
    const draw = checkDraw(newBoard);

    if (newWinner) {
      play('success');
      setWinner(newWinner);
      setTimeout(() => onComplete(newWinner), 2000);
    } else if (draw) {
      play('fail');
      setIsDraw(true);
      setTimeout(() => onComplete(''), 2000);
    } else {
      setCurrentPlayer(currentPlayer === 0 ? 1 : 0);
    }
  };

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
      <div className="bg-gradient-to-br from-[#1a1a2e] to-[#16213e] rounded-xl p-8 max-w-md w-full text-center relative overflow-hidden border border-white/10">
        {/* Background pattern */}
        <div className="absolute inset-0 bg-[url('/patterns/topography.svg')] opacity-5" />
        
        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-[var(--primary)] to-[var(--secondary)] opacity-20" />

        <div className="relative z-10">
          <button
            onClick={onClose}
            className="absolute top-4 right-4 text-white/60 hover:text-white/90"
          >
            <XMarkIcon className="h-6 w-6" />
          </button>

          <h2 className="text-2xl font-bold text-white mb-4">
            Morpion
          </h2>

          <div className="space-y-6">
            {!winner && !isDraw && (
              <p className="text-lg text-white/80">
                Tour de {players[currentPlayer]} ({symbols[players[currentPlayer]]})
              </p>
            )}

            <div className="grid grid-cols-3 gap-2 max-w-[300px] mx-auto">
              {board.map((cell, index) => (
                <motion.button
                  key={index}
                  whileHover={{ scale: cell ? 1 : 1.05 }}
                  whileTap={{ scale: cell ? 1 : 0.95 }}
                  onClick={() => handleCellClick(index)}
                  className={`h-24 flex items-center justify-center text-4xl rounded-lg transition shadow-lg ${
                    cell 
                      ? 'bg-gradient-to-br from-[#1a1a2e] to-[#16213e] border border-white/10' 
                      : 'bg-gradient-to-r from-[var(--primary)] to-[var(--secondary)] opacity-75 hover:opacity-100'
                  }`}
                  disabled={!!cell || !!winner || isDraw}
                >
                  {cell}
                </motion.button>
              ))}
            </div>

            {(winner || isDraw) && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-xl font-bold text-white"
              >
                {winner ? (
                  `${winner} gagne ! L'autre boit !`
                ) : (
                  "Match nul ! Tout le monde boit ! 🍻"
                )}
              </motion.div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}