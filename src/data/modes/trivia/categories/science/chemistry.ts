import { Challenge, GameMode } from '../../../../../types/game';

export const chemistryTrivia: Challenge[] = [
  {
    id: 'trivia_chemistry_1',
    text: "Quel est l'élément chimique le plus abondant dans l'univers ?",
    answer: "L'hydrogène",
    choices: ["L'hélium", "L'hydrogène", "L'oxygène", "Le carbone"],
    type: 'trivia',
    mode: GameMode.Trivia,
    intensity: 'medium',
    shotsCount: 2
  },
  {
    id: 'trivia_chemistry_2',
    text: "Quel est le numéro atomique de l'or ?",
    answer: "79",
    choices: ["47", "79", "82", "92"],
    type: 'trivia',
    mode: GameMode.Trivia,
    intensity: 'spicy',
    shotsCount: 3
  },
  {
    id: 'trivia_chemistry_3',
    text: "Quel est le gaz noble le plus lourd ?",
    answer: "Le radon",
    choices: ["Le xénon", "Le radon", "Le krypton", "L'argon"],
    type: 'trivia',
    mode: GameMode.Trivia,
    intensity: 'extreme',
    shotsCount: 4
  },
  {
    id: 'trivia_chemistry_4',
    text: "Quelle est la molécule responsable de l'odeur de la vanille ?",
    answer: "La vanilline",
    choices: ["La vanilline", "L'eugénol", "Le limonène", "Le menthol"],
    type: 'trivia',
    mode: GameMode.Trivia,
    intensity: 'spicy',
    shotsCount: 3
  },
  {
    id: 'trivia_chemistry_5',
    text: "Quel acide est présent dans le vinaigre ?",
    answer: "L'acide acétique",
    choices: ["L'acide citrique", "L'acide acétique", "L'acide lactique", "L'acide malique"],
    type: 'trivia',
    mode: GameMode.Trivia,
    intensity: 'medium',
    shotsCount: 2
  }
];