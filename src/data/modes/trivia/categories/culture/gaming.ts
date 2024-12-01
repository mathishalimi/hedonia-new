import { Challenge, GameMode } from '../../../../../types/game';

export const gamingTrivia: Challenge[] = [
  {
    id: 'trivia_gaming_1',
    text: "Quelle est la console de jeux la plus vendue de tous les temps ?",
    answer: "La PlayStation 2",
    choices: ["La PlayStation 2", "La Nintendo DS", "La Wii", "La Game Boy"],
    type: 'trivia',
    mode: GameMode.Trivia,
    intensity: 'medium',
    shotsCount: 2
  },
  {
    id: 'trivia_gaming_2',
    text: "Quel est le jeu vidéo le plus vendu de tous les temps ?",
    answer: "Minecraft",
    choices: ["Tetris", "Minecraft", "GTA V", "Wii Sports"],
    type: 'trivia',
    mode: GameMode.Trivia,
    intensity: 'soft',
    shotsCount: 1
  },
  // Add more gaming questions...
];