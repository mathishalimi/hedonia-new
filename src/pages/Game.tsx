import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useGameStore } from '../store/gameStore';
import { GameMode } from '../types/game';
import { ArmWrestling, DiceChallenge, TicTacToe, Countdown } from '../components/MiniGames';
import DuelGame from '../components/DuelGame';
import WheelOfDares from '../components/WheelOfDares/WheelOfDares';
import SwipeableChallenge from '../components/SwipeableChallenge';
import RiddleGame from '../components/RiddleGame';
import TriviaGame from '../components/TriviaGame';
import PenaltyChoice from '../components/PenaltyChoice';
import GameStart from '../components/GameStart';

export default function Game() {
  const navigate = useNavigate();
  const { 
    gameStarted, 
    startGame, 
    currentMode,
    showMiniGame,
    currentMiniGame,
    nextChallenge,
    addPoints,
    players,
    isGameOver,
    isPenaltyPhase,
    losingPlayer,
    setShowMiniGame,
    setCurrentMiniGame,
    setPenaltyPhase,
    setLosingPlayer,
    gameState
  } = useGameStore();

  useEffect(() => {
    if (isGameOver) {
      navigate('/game-over');
    }
  }, [isGameOver, navigate]);

  useEffect(() => {
    if (!gameStarted) {
      startGame();
    }
  }, [gameStarted, startGame]);

  if (!gameStarted) {
    return null;
  }

  // Show initial drinking screen if it's the first round
  if (gameState.roundNumber === 0) {
    return <GameStart />;
  }

  const handleMiniGameComplete = (winnerId: string) => {
    if (!winnerId) {
      players.forEach(player => {
        addPoints(player, -5);
      });
      setShowMiniGame(false);
      setCurrentMiniGame(null);
      nextChallenge();
      return;
    }

    addPoints(winnerId, 15);
    const loserId = players.find(id => id !== winnerId);
    
    if (loserId) {
      addPoints(loserId, -5);
      setLosingPlayer(loserId);
      setPenaltyPhase(true);
    }
    
    setShowMiniGame(false);
    setCurrentMiniGame(null);
  };

  const handlePenaltyComplete = () => {
    setPenaltyPhase(false);
    setLosingPlayer(null);
    nextChallenge();
  };

  const renderMiniGame = () => {
    switch (currentMiniGame) {
      case 'roulette':
        return <WheelOfDares />;
      case 'armWrestling':
        return <ArmWrestling onClose={() => handleMiniGameComplete('')} onComplete={handleMiniGameComplete} />;
      case 'diceChallenge':
        return <DiceChallenge onClose={() => handleMiniGameComplete('')} onComplete={handleMiniGameComplete} />;
      case 'tic-tac-toe':
        return <TicTacToe onClose={() => handleMiniGameComplete('')} onComplete={handleMiniGameComplete} />;
      case 'countdown':
        return <Countdown onClose={() => handleMiniGameComplete('')} onComplete={handleMiniGameComplete} />;
      default:
        return null;
    }
  };

  const renderGameMode = () => {
    switch (currentMode) {
      case GameMode.Duel:
        return <DuelGame />;
      case GameMode.Riddles:
        return <RiddleGame />;
      case GameMode.Trivia:
        return <TriviaGame />;
      default:
        return (
          <div className="w-full h-screen flex items-center justify-center px-3">
            <SwipeableChallenge />
            {showMiniGame && renderMiniGame()}
            {isPenaltyPhase && losingPlayer && (
              <PenaltyChoice 
                onComplete={handlePenaltyComplete}
                losingPlayer={losingPlayer}
              />
            )}
          </div>
        );
    }
  };

  return (
    <div className="min-h-screen bg-[var(--background)]">
      {renderGameMode()}
    </div>
  );
}