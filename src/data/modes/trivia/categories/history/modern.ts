import { Challenge, GameMode } from '../../../../../types/game';

export const modernHistoryTrivia: Challenge[] = [
  {
    id: 'trivia_modern_1',
    text: "En quelle année est tombé le mur de Berlin ?",
    answer: "1989",
    choices: ["1985", "1989", "1991", "1993"],
    type: 'trivia',
    mode: GameMode.Trivia,
    intensity: 'medium',
    shotsCount: 2
  },
  {
    id: 'trivia_modern_2',
    text: "Qui était le premier président des États-Unis ?",
    answer: "George Washington",
    choices: ["Thomas Jefferson", "George Washington", "John Adams", "Benjamin Franklin"],
    type: 'trivia',
    mode: GameMode.Trivia,
    intensity: 'soft',
    shotsCount: 1
  },
  {
    id: 'trivia_modern_3',
    text: "Quel événement a déclenché la Première Guerre mondiale ?",
    answer: "L'assassinat de l'archiduc François-Ferdinand",
    choices: ["L'invasion de la Pologne", "L'assassinat de l'archiduc François-Ferdinand", "Le traité de Versailles", "La révolution russe"],
    type: 'trivia',
    mode: GameMode.Trivia,
    intensity: 'spicy',
    shotsCount: 3
  },
  {
    id: 'trivia_modern_4',
    text: "En quelle année a eu lieu la révolution française ?",
    answer: "1789",
    choices: ["1776", "1789", "1799", "1804"],
    type: 'trivia',
    mode: GameMode.Trivia,
    intensity: 'medium',
    shotsCount: 2
  },
  {
    id: 'trivia_modern_5',
    text: "Qui était le premier homme à marcher sur la Lune ?",
    answer: "Neil Armstrong",
    choices: ["Buzz Aldrin", "Neil Armstrong", "Yuri Gagarin", "John Glenn"],
    type: 'trivia',
    mode: GameMode.Trivia,
    intensity: 'soft',
    shotsCount: 1
  }
];