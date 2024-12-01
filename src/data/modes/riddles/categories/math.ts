import { Challenge, GameMode } from '../../../../types/game';

export const mathRiddles: Challenge[] = [
  {
    id: 'riddle_math_1',
    text: "Je suis un nombre qui vaut moins que rien. Qui suis-je ? (un nombre négatif)",
    type: 'riddle',
    mode: GameMode.Riddles,
    intensity: 'medium',
    shotsCount: 2
  },
  {
    id: 'riddle_math_2',
    text: "Je suis le seul nombre qui ne peut être divisé que par 1 et par lui-même. Je suis plus petit que 2. Qui suis-je ? (1)",
    type: 'riddle',
    mode: GameMode.Riddles,
    intensity: 'medium',
    shotsCount: 2
  },
  {
    id: 'riddle_math_3',
    text: "Plus tu m'ajoutes, plus je deviens petit. Qui suis-je ? (une fraction)",
    type: 'riddle',
    mode: GameMode.Riddles,
    intensity: 'spicy',
    shotsCount: 3
  },
  {
    id: 'riddle_math_4',
    text: "Je suis un nombre qui se lit pareil dans les deux sens. Qui suis-je ? (un palindrome)",
    type: 'riddle',
    mode: GameMode.Riddles,
    intensity: 'medium',
    shotsCount: 2
  },
  {
    id: 'riddle_math_5',
    text: "Je suis le seul nombre qui est égal à la somme de tous les nombres qui me précèdent. Qui suis-je ? (1)",
    type: 'riddle',
    mode: GameMode.Riddles,
    intensity: 'extreme',
    shotsCount: 4
  }
];