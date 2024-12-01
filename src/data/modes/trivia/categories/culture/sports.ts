import { Challenge, GameMode } from '../../../../../types/game';

export const sportsTrivia: Challenge[] = [
  {
    id: 'trivia_sports_1',
    text: "Quel pays a gagné le plus de Coupes du Monde de football ?",
    answer: "Brésil",
    choices: ["Allemagne", "Brésil", "Italie", "Argentine"],
    type: 'trivia',
    mode: GameMode.Trivia,
    intensity: 'medium',
    shotsCount: 2
  },
  {
    id: 'trivia_sports_2',
    text: "Qui détient le record du 100m ?",
    answer: "Usain Bolt",
    choices: ["Carl Lewis", "Usain Bolt", "Asafa Powell", "Justin Gatlin"],
    type: 'trivia',
    mode: GameMode.Trivia,
    intensity: 'soft',
    shotsCount: 1
  },
  {
    id: 'trivia_sports_3',
    text: "Dans quel sport utilise-t-on un shuttlecock ?",
    answer: "Badminton",
    choices: ["Tennis", "Badminton", "Squash", "Tennis de table"],
    type: 'trivia',
    mode: GameMode.Trivia,
    intensity: 'spicy',
    shotsCount: 3
  },
  {
    id: 'trivia_sports_4',
    text: "Combien de joueurs y a-t-il dans une équipe de rugby à XV ?",
    answer: "15",
    choices: ["13", "14", "15", "16"],
    type: 'trivia',
    mode: GameMode.Trivia,
    intensity: 'medium',
    shotsCount: 2
  },
  {
    id: 'trivia_sports_5',
    text: "En quelle année les premiers Jeux Olympiques modernes ont-ils eu lieu ?",
    answer: "1896",
    choices: ["1886", "1896", "1900", "1904"],
    type: 'trivia',
    mode: GameMode.Trivia,
    intensity: 'spicy',
    shotsCount: 3
  }
];