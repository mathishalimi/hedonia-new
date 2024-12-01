import { Challenge, GameMode } from '../../../../../types/game';

export const literatureTrivia: Challenge[] = [
  {
    id: 'trivia_literature_1',
    text: "Qui a écrit 'Les Misérables' ?",
    answer: "Victor Hugo",
    choices: ["Émile Zola", "Victor Hugo", "Gustave Flaubert", "Honoré de Balzac"],
    type: 'trivia',
    mode: GameMode.Trivia,
    intensity: 'medium',
    shotsCount: 2
  },
  {
    id: 'trivia_literature_2',
    text: "Quel est l'auteur de '1984' ?",
    answer: "George Orwell",
    choices: ["Aldous Huxley", "George Orwell", "Ray Bradbury", "Philip K. Dick"],
    type: 'trivia',
    mode: GameMode.Trivia,
    intensity: 'medium',
    shotsCount: 2
  },
  {
    id: 'trivia_literature_3',
    text: "Qui a écrit 'Le Petit Prince' ?",
    answer: "Antoine de Saint-Exupéry",
    choices: ["Jules Verne", "Antoine de Saint-Exupéry", "Albert Camus", "Marcel Proust"],
    type: 'trivia',
    mode: GameMode.Trivia,
    intensity: 'soft',
    shotsCount: 1
  },
  {
    id: 'trivia_literature_4',
    text: "Quel est le premier roman de la série Harry Potter ?",
    answer: "Harry Potter à l'école des sorciers",
    choices: ["Harry Potter à l'école des sorciers", "La Chambre des secrets", "Le Prisonnier d'Azkaban", "La Coupe de feu"],
    type: 'trivia',
    mode: GameMode.Trivia,
    intensity: 'soft',
    shotsCount: 1
  },
  {
    id: 'trivia_literature_5',
    text: "Qui a écrit 'L'Étranger' ?",
    answer: "Albert Camus",
    choices: ["Jean-Paul Sartre", "Albert Camus", "Simone de Beauvoir", "André Malraux"],
    type: 'trivia',
    mode: GameMode.Trivia,
    intensity: 'medium',
    shotsCount: 2
  }
];