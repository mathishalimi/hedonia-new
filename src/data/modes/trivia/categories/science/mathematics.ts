import { Challenge, GameMode } from '../../../../../types/game';

export const mathematicsTrivia: Challenge[] = [
  {
    id: 'trivia_math_1',
    text: "Quel est le seul nombre premier pair ?",
    answer: "2",
    choices: ["0", "1", "2", "4"],
    type: 'trivia',
    mode: GameMode.Trivia,
    intensity: 'medium',
    shotsCount: 2
  },
  {
    id: 'trivia_math_2',
    text: "Quelle est la valeur de Pi arrondie à deux décimales ?",
    answer: "3,14",
    choices: ["3,12", "3,14", "3,16", "3,18"],
    type: 'trivia',
    mode: GameMode.Trivia,
    intensity: 'soft',
    shotsCount: 1
  },
  {
    id: 'trivia_math_3',
    text: "Quel est le nombre d'or ?",
    answer: "1,618",
    choices: ["1,414", "1,618", "2,236", "2,718"],
    type: 'trivia',
    mode: GameMode.Trivia,
    intensity: 'extreme',
    shotsCount: 4
  },
  {
    id: 'trivia_math_4',
    text: "Combien y a-t-il de degrés dans un cercle ?",
    answer: "360",
    choices: ["180", "270", "360", "400"],
    type: 'trivia',
    mode: GameMode.Trivia,
    intensity: 'soft',
    shotsCount: 1
  },
  {
    id: 'trivia_math_5',
    text: "Quel est le plus petit nombre parfait ?",
    answer: "6",
    choices: ["4", "6", "8", "12"],
    type: 'trivia',
    mode: GameMode.Trivia,
    intensity: 'spicy',
    shotsCount: 3
  }
];