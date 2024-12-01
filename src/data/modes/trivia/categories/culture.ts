import { Challenge, GameMode } from '../../../../types/game';

export const cultureTrivia: Challenge[] = [
  // Cinéma (15 questions)
  {
    id: 'trivia_culture_1',
    text: "Quel est le film le plus rentable de tous les temps ?",
    answer: "Avatar",
    choices: ["Avengers: Endgame", "Avatar", "Titanic", "Star Wars: Le Réveil de la Force"],
    type: 'trivia',
    mode: GameMode.Trivia,
    intensity: 'medium'
  },
  {
    id: 'trivia_culture_2',
    text: "Qui a réalisé 'Pulp Fiction' ?",
    answer: "Quentin Tarantino",
    choices: ["Martin Scorsese", "Quentin Tarantino", "Steven Spielberg", "Christopher Nolan"],
    type: 'trivia',
    mode: GameMode.Trivia,
    intensity: 'medium'
  },
  // Musique (15 questions)
  {
    id: 'trivia_culture_16',
    text: "Quel album est le plus vendu de tous les temps ?",
    answer: "Thriller de Michael Jackson",
    choices: ["Back in Black d'AC/DC", "Thriller de Michael Jackson", "The Dark Side of the Moon de Pink Floyd", "Their Greatest Hits des Eagles"],
    type: 'trivia',
    mode: GameMode.Trivia,
    intensity: 'medium'
  },
  // Art (10 questions)
  {
    id: 'trivia_culture_31',
    text: "Qui a peint 'Les Tournesols' ?",
    answer: "Vincent van Gogh",
    choices: ["Claude Monet", "Vincent van Gogh", "Paul Gauguin", "Pablo Picasso"],
    type: 'trivia',
    mode: GameMode.Trivia,
    intensity: 'medium'
  },
  // Sport (10 questions)
  {
    id: 'trivia_culture_41',
    text: "Qui détient le record du 100m ?",
    answer: "Usain Bolt",
    choices: ["Carl Lewis", "Usain Bolt", "Tyson Gay", "Yohan Blake"],
    type: 'trivia',
    mode: GameMode.Trivia,
    intensity: 'soft'
  }
  // ... Add remaining culture questions to reach 50 total
];