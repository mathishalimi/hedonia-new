import { GameState, GameSettings } from './game';

export interface Room {
  id: string;
  code: string;
  host: string;
  players: Player[];
  gameState: GameState;
  status: RoomStatus;
  settings: GameSettings;
  createdAt: Date;
  updatedAt: Date;
}

export interface Player {
  id: string;
  name: string;
  isHost: boolean;
  isReady: boolean;
  score: number;
  connected: boolean;
}

export type RoomStatus = 'waiting' | 'playing' | 'finished';