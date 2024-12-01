import { Challenge, GameMode } from '../../../../../types/game';

export const geneticsTrivia: Challenge[] = [
  {
    id: 'trivia_genetics_1',
    text: "Combien de paires de chromosomes possède l'être humain ?",
    answer: "23 paires",
    choices: ["21 paires", "22 paires", "23 paires", "24 paires"],
    type: 'trivia',
    mode: GameMode.Trivia,
    intensity: 'medium',
    shotsCount: 2
  },
  {
    id: 'trivia_genetics_2',
    text: "Quelle est la molécule qui porte l'information génétique ?",
    answer: "L'ADN",
    choices: ["L'ARN", "L'ADN", "Les protéines", "Les lipides"],
    type: 'trivia',
    mode: GameMode.Trivia,
    intensity: 'soft',
    shotsCount: 1
  },
  // Add more genetics questions...
];