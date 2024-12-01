import { Challenge, GameMode } from '../../../../../types/game';

export const environmentTrivia: Challenge[] = [
  {
    id: 'trivia_environment_1',
    text: "Quel est le gaz à effet de serre le plus abondant dans l'atmosphère ?",
    answer: "La vapeur d'eau",
    choices: ["Le CO2", "Le méthane", "La vapeur d'eau", "L'ozone"],
    type: 'trivia',
    mode: GameMode.Trivia,
    intensity: 'medium',
    shotsCount: 2
  },
  {
    id: 'trivia_environment_2',
    text: "Quelle est la plus grande forêt tropicale du monde ?",
    answer: "L'Amazonie",
    choices: ["Le Congo", "L'Amazonie", "L'Indonésie", "Le Bornéo"],
    type: 'trivia',
    mode: GameMode.Trivia,
    intensity: 'soft',
    shotsCount: 1
  },
  // Add more environment questions...
];