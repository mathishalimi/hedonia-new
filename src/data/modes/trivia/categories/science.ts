import { Challenge, GameMode } from '../../../../types/game';

export const scienceTrivia: Challenge[] = [
  // Physics (15 questions)
  {
    id: 'trivia_science_1',
    text: "Quelle est la plus petite particule de matière ?",
    answer: "Le quark",
    choices: ["L'atome", "L'électron", "Le quark", "Le proton"],
    type: 'trivia',
    mode: GameMode.Trivia,
    intensity: 'spicy'
  },
  {
    id: 'trivia_science_2',
    text: "Quelle est la force fondamentale la plus faible ?",
    answer: "La gravité",
    choices: ["La force électromagnétique", "La force nucléaire forte", "La force nucléaire faible", "La gravité"],
    type: 'trivia',
    mode: GameMode.Trivia,
    intensity: 'extreme'
  },
  // Biology (15 questions)
  {
    id: 'trivia_science_16',
    text: "Combien de cellules y a-t-il dans le corps humain ?",
    answer: "37,2 billions",
    choices: ["1 billion", "37,2 billions", "100 billions", "1 trillion"],
    type: 'trivia',
    mode: GameMode.Trivia,
    intensity: 'spicy'
  },
  // Chemistry (10 questions)
  {
    id: 'trivia_science_31',
    text: "Quel est l'élément le plus abondant dans l'univers ?",
    answer: "L'hydrogène",
    choices: ["L'hélium", "L'hydrogène", "L'oxygène", "Le carbone"],
    type: 'trivia',
    mode: GameMode.Trivia,
    intensity: 'medium'
  },
  // Astronomy (10 questions)
  {
    id: 'trivia_science_41',
    text: "Quelle est la plus grande planète du système solaire ?",
    answer: "Jupiter",
    choices: ["Saturne", "Jupiter", "Neptune", "Uranus"],
    type: 'trivia',
    mode: GameMode.Trivia,
    intensity: 'soft'
  }
  // ... Add remaining science questions to reach 50 total
];