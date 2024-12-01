import { Challenge, GameMode } from '../../../../../types/game';

export const movieTrivia: Challenge[] = [
  {
    id: 'trivia_movies_1',
    text: "Quel film a remporté l'Oscar du meilleur film en 1994 ?",
    answer: "La Liste de Schindler",
    choices: ["Jurassic Park", "La Liste de Schindler", "Les Évadés", "Pulp Fiction"],
    type: 'trivia',
    mode: GameMode.Trivia,
    intensity: 'medium',
    shotsCount: 2
  },
  {
    id: 'trivia_movies_2',
    text: "Qui a réalisé Inception ?",
    answer: "Christopher Nolan",
    choices: ["Martin Scorsese", "Christopher Nolan", "Steven Spielberg", "James Cameron"],
    type: 'trivia',
    mode: GameMode.Trivia,
    intensity: 'medium',
    shotsCount: 2
  },
  {
    id: 'trivia_movies_3',
    text: "Dans quel film entend-on 'Je suis ton père' ?",
    answer: "L'Empire contre-attaque",
    choices: ["Un nouvel espoir", "L'Empire contre-attaque", "Le Retour du Jedi", "La Menace fantôme"],
    type: 'trivia',
    mode: GameMode.Trivia,
    intensity: 'soft',
    shotsCount: 1
  },
  {
    id: 'trivia_movies_4',
    text: "Quel acteur joue Tony Stark dans Iron Man ?",
    answer: "Robert Downey Jr.",
    choices: ["Chris Evans", "Robert Downey Jr.", "Chris Hemsworth", "Mark Ruffalo"],
    type: 'trivia',
    mode: GameMode.Trivia,
    intensity: 'soft',
    shotsCount: 1
  },
  {
    id: 'trivia_movies_5',
    text: "Quel est le film le plus rentable de tous les temps ?",
    answer: "Avatar",
    choices: ["Avengers: Endgame", "Avatar", "Titanic", "Star Wars: Le Réveil de la Force"],
    type: 'trivia',
    mode: GameMode.Trivia,
    intensity: 'medium',
    shotsCount: 2
  }
];