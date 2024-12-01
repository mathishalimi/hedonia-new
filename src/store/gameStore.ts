import { create } from 'zustand';
import { Challenge, GameMode, GameSettings, GameState } from '../types/game';
import { challenges } from '../data/challenges';
import { triviaChallenges } from '../data/modes/trivia';
import { riddles } from '../data/riddles';
import { getIntensityLevel } from '../utils/intensityScaling';
import { filterChallengesByIntensity } from '../utils/challengeFilters';
import { challengeRotation } from '../utils/challengeRotation';

interface GameStore {
  players: string[];
  currentMode: GameMode;
  currentPlayer: number;
  currentChallenge: Challenge | null;
  settings: GameSettings;
  gameStarted: boolean;
  isGameOver: boolean;
  isPenaltyPhase: boolean;
  losingPlayer: string | null;
  gameState: GameState;
  roundTimer: number | null;
  roomCode: string | null;
  showMiniGame: boolean;
  currentMiniGame: string | null;
  miniGameIndex: number;
  usedChallenges: Set<string>;
  isPremium: boolean;

  // Actions
  addPlayer: (name: string) => void;
  removePlayer: (name: string) => void;
  setGameMode: (mode: GameMode) => void;
  startGame: () => void;
  nextChallenge: () => void;
  updateSettings: (settings: Partial<GameSettings>) => void;
  addPoints: (playerId: string, points: number) => void;
  resetGame: () => void;
  endGame: () => void;
  setRoomCode: (code: string | null) => void;
  setShowMiniGame: (show: boolean) => void;
  setCurrentMiniGame: (game: string | null) => void;
  setPenaltyPhase: (phase: boolean) => void;
  setLosingPlayer: (player: string | null) => void;
  setPremium: (isPremium: boolean) => void;
}

const defaultSettings: GameSettings = {
  intensity: 'medium',
  duration: 30,
  includeMiniGames: true,
  teamMode: false,
  categories: ['social', 'funny', 'skills'],
  turnDuration: 60,
  pointsToWin: 150,
  enableTimer: true,
  allowVeto: true,
  specialRules: []
};

export const useGameStore = create<GameStore>((set, get) => ({
  players: [],
  currentMode: GameMode.Classic,
  currentPlayer: 0,
  currentChallenge: null,
  settings: defaultSettings,
  gameStarted: false,
  isGameOver: false,
  isPenaltyPhase: false,
  losingPlayer: null,
  gameState: {
    activeRules: [],
    roundNumber: 0,
    scores: {},
    history: [],
    shotsCount: 0,
    totalPoints: 0
  },
  roundTimer: null,
  roomCode: null,
  showMiniGame: false,
  currentMiniGame: null,
  miniGameIndex: 0,
  usedChallenges: new Set<string>(),
  isPremium: false,

  addPlayer: (name) => {
    set((state) => ({
      players: [...state.players, name],
      gameState: {
        ...state.gameState,
        scores: { ...state.gameState.scores, [name]: 0 }
      }
    }));
  },

  removePlayer: (name) => {
    set((state) => ({
      players: state.players.filter(p => p !== name),
      gameState: {
        ...state.gameState,
        scores: Object.fromEntries(
          Object.entries(state.gameState.scores).filter(([player]) => player !== name)
        )
      }
    }));
  },

  setGameMode: (mode) => {
    set({ currentMode: mode });
    challengeRotation.reset();
  },

  startGame: () => {
    set({
      gameStarted: true,
      isGameOver: false,
      currentChallenge: null,
      gameState: {
        activeRules: [],
        roundNumber: 0,
        scores: Object.fromEntries(get().players.map(p => [p, 0])),
        history: [],
        shotsCount: 0,
        totalPoints: 0
      }
    });
  },

  nextChallenge: () => {
    const state = get();
    const nextPlayer = (state.currentPlayer + 1) % state.players.length;
    
    const totalPoints = Object.values(state.gameState.scores).reduce((sum, score) => sum + score, 0);
    const currentIntensity = getIntensityLevel(totalPoints, state.settings.pointsToWin);

    const availableChallenges = filterChallengesByIntensity(
      state.currentMode === GameMode.Trivia ? triviaChallenges :
      state.currentMode === GameMode.Riddles ? riddles :
      challenges.filter(c => c.mode === state.currentMode),
      currentIntensity
    );

    const nextChallenge = challengeRotation.getNextChallenge(availableChallenges);
    const nextRound = state.gameState.roundNumber + 1;

    if (nextRound % 5 === 0 && state.currentMode !== GameMode.Duel && state.settings.includeMiniGames) {
      const miniGameIndex = state.miniGameIndex % 5;
      const miniGames = ['roulette', 'tic-tac-toe', 'armWrestling', 'diceChallenge', 'countdown'];
      
      set({
        showMiniGame: true,
        currentMiniGame: miniGames[miniGameIndex],
        currentPlayer: nextPlayer,
        miniGameIndex: miniGameIndex + 1,
        gameState: {
          ...state.gameState,
          roundNumber: nextRound,
          totalPoints
        }
      });
    } else {
      set({
        showMiniGame: false,
        currentMiniGame: null,
        isPenaltyPhase: false,
        losingPlayer: null,
        currentPlayer: nextPlayer,
        currentChallenge: nextChallenge,
        gameState: {
          ...state.gameState,
          roundNumber: nextRound,
          totalPoints
        }
      });
    }
  },

  updateSettings: (newSettings) => {
    set((state) => ({
      settings: { ...state.settings, ...newSettings }
    }));
  },

  addPoints: (playerId, points) => {
    set((state) => {
      const newScores = {
        ...state.gameState.scores,
        [playerId]: (state.gameState.scores[playerId] || 0) + points
      };
      
      if (newScores[playerId] >= state.settings.pointsToWin) {
        return {
          gameState: {
            ...state.gameState,
            scores: newScores
          },
          isGameOver: true
        };
      }

      return {
        gameState: {
          ...state.gameState,
          scores: newScores
        }
      };
    });
  },

  resetGame: () => {
    set({
      gameStarted: false,
      isGameOver: false,
      currentPlayer: 0,
      currentChallenge: null,
      isPenaltyPhase: false,
      losingPlayer: null,
      gameState: {
        activeRules: [],
        roundNumber: 0,
        scores: {},
        history: [],
        shotsCount: 0,
        totalPoints: 0
      },
      roomCode: null,
      showMiniGame: false,
      currentMiniGame: null,
      miniGameIndex: 0,
      usedChallenges: new Set<string>()
    });
    challengeRotation.reset();
  },

  endGame: () => {
    set({ isGameOver: true });
  },

  setRoomCode: (code) => set({ roomCode: code }),
  setShowMiniGame: (show) => set({ showMiniGame: show }),
  setCurrentMiniGame: (game) => set({ currentMiniGame: game }),
  setPenaltyPhase: (phase) => set({ isPenaltyPhase: phase }),
  setLosingPlayer: (player) => set({ losingPlayer: player }),
  setPremium: (isPremium) => set({ isPremium })
}));