import { Challenge, GameMode } from '../../../../../types/game';

export const fashionTrivia: Challenge[] = [
  {
    id: 'trivia_fashion_1',
    text: "Quelle marque de luxe a créé le sac 'Lady Dior' ?",
    answer: "Dior",
    choices: ["Chanel", "Dior", "Louis Vuitton", "Hermès"],
    type: 'trivia',
    mode: GameMode.Trivia,
    intensity: 'medium',
    shotsCount: 2
  },
  {
    id: 'trivia_fashion_2',
    text: "Qui est considéré comme le 'Roi de la Mode' ?",
    answer: "Karl Lagerfeld",
    choices: ["Giorgio Armani", "Karl Lagerfeld", "Ralph Lauren", "Tom Ford"],
    type: 'trivia',
    mode: GameMode.Trivia,
    intensity: 'medium',
    shotsCount: 2
  },
  // Add more fashion questions...
];