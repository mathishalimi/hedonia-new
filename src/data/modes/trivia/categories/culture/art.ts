import { Challenge, GameMode } from '../../../../../types/game';

export const artTrivia: Challenge[] = [
  {
    id: 'trivia_art_1',
    text: "Qui a peint 'La Nuit étoilée' ?",
    answer: "Vincent van Gogh",
    choices: ["Claude Monet", "Vincent van Gogh", "Pablo Picasso", "Salvador Dalí"],
    type: 'trivia',
    mode: GameMode.Trivia,
    intensity: 'medium',
    shotsCount: 2
  },
  {
    id: 'trivia_art_2',
    text: "Dans quel musée se trouve 'La Joconde' ?",
    answer: "Le Louvre",
    choices: ["Le Louvre", "Le Prado", "Les Offices", "Le MoMA"],
    type: 'trivia',
    mode: GameMode.Trivia,
    intensity: 'soft',
    shotsCount: 1
  },
  {
    id: 'trivia_art_3',
    text: "Qui a sculpté 'Le Penseur' ?",
    answer: "Auguste Rodin",
    choices: ["Michel-Ange", "Auguste Rodin", "Donatello", "Bernini"],
    type: 'trivia',
    mode: GameMode.Trivia,
    intensity: 'medium',
    shotsCount: 2
  },
  {
    id: 'trivia_art_4',
    text: "Quel mouvement artistique a créé Salvador Dalí ?",
    answer: "Le surréalisme",
    choices: ["Le cubisme", "Le surréalisme", "L'impressionnisme", "L'expressionnisme"],
    type: 'trivia',
    mode: GameMode.Trivia,
    intensity: 'spicy',
    shotsCount: 3
  },
  {
    id: 'trivia_art_5',
    text: "Qui a peint le plafond de la chapelle Sixtine ?",
    answer: "Michel-Ange",
    choices: ["Léonard de Vinci", "Michel-Ange", "Raphaël", "Botticelli"],
    type: 'trivia',
    mode: GameMode.Trivia,
    intensity: 'soft',
    shotsCount: 1
  }
];