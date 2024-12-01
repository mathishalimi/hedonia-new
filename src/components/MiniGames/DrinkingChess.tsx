import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { XMarkIcon } from '@heroicons/react/24/solid';
import { useGameStore } from '../../store/gameStore';
import { useSoundEffects } from '../../hooks/useSoundEffects';

interface Props {
  onClose: () => void;
  onComplete: (winnerId: string) => void;
}

interface Piece {
  id: string;
  type: 'pawn' | 'rook' | 'knight' | 'bishop' | 'queen' | 'king';
  player: number;
  position: number;
}

interface Capture {
  capturer: Piece;
  captured: Piece;
}

const INITIAL_PIECES: Piece[] = [
  // Player 1 pieces (bottom)
  { id: 'p1-pawn1', type: 'pawn', player: 0, position: 48 },
  { id: 'p1-pawn2', type: 'pawn', player: 0, position: 49 },
  { id: 'p1-pawn3', type: 'pawn', player: 0, position: 50 },
  { id: 'p1-pawn4', type: 'pawn', player: 0, position: 51 },
  { id: 'p1-rook1', type: 'rook', player: 0, position: 56 },
  { id: 'p1-knight1', type: 'knight', player: 0, position: 57 },
  { id: 'p1-bishop1', type: 'bishop', player: 0, position: 58 },
  { id: 'p1-queen', type: 'queen', player: 0, position: 59 },
  
  // Player 2 pieces (top)
  { id: 'p2-pawn1', type: 'pawn', player: 1, position: 8 },
  { id: 'p2-pawn2', type: 'pawn', player: 1, position: 9 },
  { id: 'p2-pawn3', type: 'pawn', player: 1, position: 10 },
  { id: 'p2-pawn4', type: 'pawn', player: 1, position: 11 },
  { id: 'p2-rook1', type: 'rook', player: 1, position: 0 },
  { id: 'p2-knight1', type: 'knight', player: 1, position: 1 },
  { id: 'p2-bishop1', type: 'bishop', player: 1, position: 2 },
  { id: 'p2-queen', type: 'queen', player: 1, position: 3 },
];

const PIECE_EMOJIS = {
  pawn: '♟️',
  rook: '♜',
  knight: '♞',
  bishop: '♝',
  queen: '♛',
  king: '♚'
};

export default function DrinkingChess({ onClose, onComplete }: Props) {
  const { players } = useGameStore();
  const { play } = useSoundEffects();
  const [pieces, setPieces] = useState<Piece[]>(INITIAL_PIECES);
  const [selectedPiece, setSelectedPiece] = useState<Piece | null>(null);
  const [validMoves, setValidMoves] = useState<number[]>([]);
  const [currentPlayer, setCurrentPlayer] = useState(0);
  const [gameStarted, setGameStarted] = useState(false);
  const [lastCapture, setLastCapture] = useState<Capture | null>(null);
  const [countdown, setCountdown] = useState(3);

  useEffect(() => {
    if (countdown > 0) {
      const timer = setTimeout(() => {
        setCountdown(countdown - 1);
        play('countdown');
      }, 1000);
      return () => clearTimeout(timer);
    } else if (countdown === 0) {
      setGameStarted(true);
    }
  }, [countdown]);

  const getValidMoves = (piece: Piece): number[] => {
    const moves: number[] = [];
    const row = Math.floor(piece.position / 8);
    const col = piece.position % 8;

    switch (piece.type) {
      case 'pawn':
        // Forward movement
        const direction = piece.player === 0 ? -1 : 1;
        const newRow = row + direction;
        if (newRow >= 0 && newRow < 8) {
          // Forward one square
          const newPos = newRow * 8 + col;
          if (!pieces.some(p => p.position === newPos)) {
            moves.push(newPos);
          }
          // Diagonal captures
          [-1, 1].forEach(offset => {
            const newCol = col + offset;
            if (newCol >= 0 && newCol < 8) {
              const capturePos = newRow * 8 + newCol;
              const targetPiece = pieces.find(p => p.position === capturePos);
              if (targetPiece && targetPiece.player !== piece.player) {
                moves.push(capturePos);
              }
            }
          });
        }
        break;

      case 'rook':
        // Horizontal and vertical movements
        [[-1, 0], [1, 0], [0, -1], [0, 1]].forEach(([dRow, dCol]) => {
          let newRow = row + dRow;
          let newCol = col + dCol;
          while (newRow >= 0 && newRow < 8 && newCol >= 0 && newCol < 8) {
            const newPos = newRow * 8 + newCol;
            const targetPiece = pieces.find(p => p.position === newPos);
            if (!targetPiece) {
              moves.push(newPos);
            } else if (targetPiece.player !== piece.player) {
              moves.push(newPos);
              break;
            } else {
              break;
            }
            newRow += dRow;
            newCol += dCol;
          }
        });
        break;

      case 'knight':
        // L-shaped movements
        [
          [-2, -1], [-2, 1], [-1, -2], [-1, 2],
          [1, -2], [1, 2], [2, -1], [2, 1]
        ].forEach(([dRow, dCol]) => {
          const newRow = row + dRow;
          const newCol = col + dCol;
          if (newRow >= 0 && newRow < 8 && newCol >= 0 && newCol < 8) {
            const newPos = newRow * 8 + newCol;
            const targetPiece = pieces.find(p => p.position === newPos);
            if (!targetPiece || targetPiece.player !== piece.player) {
              moves.push(newPos);
            }
          }
        });
        break;

      case 'bishop':
        // Diagonal movements
        [[-1, -1], [-1, 1], [1, -1], [1, 1]].forEach(([dRow, dCol]) => {
          let newRow = row + dRow;
          let newCol = col + dCol;
          while (newRow >= 0 && newRow < 8 && newCol >= 0 && newCol < 8) {
            const newPos = newRow * 8 + newCol;
            const targetPiece = pieces.find(p => p.position === newPos);
            if (!targetPiece) {
              moves.push(newPos);
            } else if (targetPiece.player !== piece.player) {
              moves.push(newPos);
              break;
            } else {
              break;
            }
            newRow += dRow;
            newCol += dCol;
          }
        });
        break;

      case 'queen':
        // Combination of rook and bishop movements
        [
          [-1, -1], [-1, 0], [-1, 1],
          [0, -1], [0, 1],
          [1, -1], [1, 0], [1, 1]
        ].forEach(([dRow, dCol]) => {
          let newRow = row + dRow;
          let newCol = col + dCol;
          while (newRow >= 0 && newRow < 8 && newCol >= 0 && newCol < 8) {
            const newPos = newRow * 8 + newCol;
            const targetPiece = pieces.find(p => p.position === newPos);
            if (!targetPiece) {
              moves.push(newPos);
            } else if (targetPiece.player !== piece.player) {
              moves.push(newPos);
              break;
            } else {
              break;
            }
            newRow += dRow;
            newCol += dCol;
          }
        });
        break;
    }

    return moves;
  };

  const handlePieceClick = (piece: Piece) => {
    if (!gameStarted || piece.player !== currentPlayer) return;
    
    play('click');
    setSelectedPiece(piece);
    setValidMoves(getValidMoves(piece));
  };

  const handleSquareClick = (position: number) => {
    if (!selectedPiece || !gameStarted) return;

    if (validMoves.includes(position)) {
      const targetPiece = pieces.find(p => p.position === position);
      let newPieces = [...pieces];

      if (targetPiece) {
        // Capture!
        play('success');
        setLastCapture({
          capturer: selectedPiece,
          captured: targetPiece
        });

        // Remove captured piece
        newPieces = newPieces.filter(p => p !== targetPiece);
      }

      // Move selected piece
      newPieces = newPieces.map(p => 
        p === selectedPiece 
          ? { ...p, position }
          : p
      );

      setPieces(newPieces);

      // Check if game is over after updating pieces
      const player1Pieces = newPieces.filter(p => p.player === 0);
      const player2Pieces = newPieces.filter(p => p.player === 1);

      if (player1Pieces.length === 0) {
        setTimeout(() => onComplete(players[1]), 2000);
      } else if (player2Pieces.length === 0) {
        setTimeout(() => onComplete(players[0]), 2000);
      } else {
        // Continue game
        setSelectedPiece(null);
        setValidMoves([]);
        setCurrentPlayer(prev => prev === 0 ? 1 : 0);
        play('click');
      }
    } else {
      play('fail');
    }
  };

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
      <motion.div
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        className="glass-card rounded-xl p-8 max-w-md w-full relative"
      >
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-white/60 hover:text-white/90"
        >
          <XMarkIcon className="h-6 w-6" />
        </button>

        <h2 className="text-2xl font-bold text-white mb-4">
          Échecs de l'Alcool ♟️
        </h2>

        {!gameStarted ? (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center space-y-6"
          >
            <div className="text-white/80">
              <p className="mb-2">Règles :</p>
              <ul className="text-sm space-y-1">
                <li>• Chaque pièce capturée = 1 gorgée</li>
                <li>• Perdre la partie = Cul sec !</li>
              </ul>
            </div>

            <div className="text-6xl font-bold text-[var(--primary)]">
              {countdown}
            </div>
          </motion.div>
        ) : (
          <>
            <div className="text-center mb-4">
              <p className="text-lg font-medium text-white">
                Tour de {players[currentPlayer]}
              </p>
            </div>

            {lastCapture && (
              <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                className="mb-4 p-3 glass-card rounded-lg text-center"
              >
                <p className="text-white/80">
                  {PIECE_EMOJIS[lastCapture.captured.type]} Capturé ! Bois une gorgée !
                </p>
              </motion.div>
            )}

            <div className="grid grid-cols-8 gap-1 aspect-square bg-white/5 p-2 rounded-lg">
              {Array.from({ length: 64 }, (_, i) => {
                const piece = pieces.find(p => p.position === i);
                const isValidMove = validMoves.includes(i);
                const isSelected = selectedPiece?.position === i;

                return (
                  <motion.button
                    key={i}
                    onClick={() => piece ? handlePieceClick(piece) : handleSquareClick(i)}
                    className={`aspect-square rounded-sm flex items-center justify-center text-2xl
                      ${((Math.floor(i / 8) + i) % 2 === 0) ? 'bg-white/10' : 'bg-white/5'}
                      ${isValidMove ? 'bg-green-500/20 hover:bg-green-500/30' : ''}
                      ${isSelected ? 'bg-blue-500/20' : ''}
                      transition-colors
                    `}
                    whileHover={piece || isValidMove ? { scale: 1.1 } : {}}
                    whileTap={piece || isValidMove ? { scale: 0.95 } : {}}
                  >
                    {piece && (
                      <span className={`transform ${piece.player === 1 ? 'rotate-180' : ''}`}>
                        {PIECE_EMOJIS[piece.type]}
                      </span>
                    )}
                    {!piece && isValidMove && (
                      <div className="w-3 h-3 rounded-full bg-green-500/40" />
                    )}
                  </motion.button>
                );
              })}
            </div>
          </>
        )}
      </motion.div>
    </div>
  );
}