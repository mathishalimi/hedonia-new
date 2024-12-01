import { Challenge, GameMode } from '../../../../../types/game';

export const physicsTrivia: Challenge[] = [
  {
    id: 'trivia_physics_1',
    text: "Quelle est la vitesse de la lumière dans le vide ?",
    answer: "299 792 458 m/s",
    choices: ["299 792 458 m/s", "300 000 000 m/s", "299 999 999 m/s", "298 000 000 m/s"],
    type: 'trivia',
    mode: GameMode.Trivia,
    intensity: 'extreme',
    shotsCount: 4
  },
  {
    id: 'trivia_physics_2',
    text: "Quelle est la théorie qui décrit la gravité comme une courbure de l'espace-temps ?",
    answer: "La relativité générale",
    choices: ["La mécanique quantique", "La relativité générale", "La théorie des cordes", "La théorie du tout"],
    type: 'trivia',
    mode: GameMode.Trivia,
    intensity: 'spicy',
    shotsCount: 3
  },
  {
    id: 'trivia_physics_3',
    text: "Quel est le nom de la plus petite particule de matière connue ?",
    answer: "Le quark",
    choices: ["L'atome", "L'électron", "Le quark", "Le neutrino"],
    type: 'trivia',
    mode: GameMode.Trivia,
    intensity: 'medium',
    shotsCount: 2
  },
  {
    id: 'trivia_physics_4',
    text: "Quelle est la température du zéro absolu en degrés Celsius ?",
    answer: "-273,15°C",
    choices: ["-273,15°C", "-300°C", "-250°C", "-100°C"],
    type: 'trivia',
    mode: GameMode.Trivia,
    intensity: 'spicy',
    shotsCount: 3
  },
  {
    id: 'trivia_physics_5',
    text: "Quel scientifique a formulé les lois du mouvement et de la gravitation universelle ?",
    answer: "Isaac Newton",
    choices: ["Albert Einstein", "Isaac Newton", "Galileo Galilei", "Johannes Kepler"],
    type: 'trivia',
    mode: GameMode.Trivia,
    intensity: 'medium',
    shotsCount: 2
  }
];