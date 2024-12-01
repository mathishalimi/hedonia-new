import { Challenge, GameMode } from '../../../../types/game';

export const dancingChallenges: Challenge[] = [
  {
    id: 'naughty_dancing_1',
    text: "Fais une danse sensuelle pendant 30 secondes",
    type: 'dare',
    mode: GameMode.Naughty,
    intensity: 'medium',
    shotsCount: 2
  },
  {
    id: 'naughty_dancing_2',
    text: "Fais un lap dance de 30 secondes au joueur de ton choix",
    type: 'dare',
    mode: GameMode.Naughty,
    intensity: 'spicy',
    shotsCount: 3
  },
  {
    id: 'naughty_dancing_3',
    text: "Reproduis la chorégraphie de 'Dirty Dancing' avec un autre joueur",
    type: 'dare',
    mode: GameMode.Naughty,
    intensity: 'spicy',
    shotsCount: 3
  },
  {
    id: 'naughty_dancing_4',
    text: "Fais un strip-tease (garde tes sous-vêtements)",
    type: 'dare',
    mode: GameMode.Naughty,
    intensity: 'extreme',
    shotsCount: 4
  },
  {
    id: 'naughty_dancing_5',
    text: "Danse sur une musique sensuelle en utilisant une chaise",
    type: 'dare',
    mode: GameMode.Naughty,
    intensity: 'spicy',
    shotsCount: 3
  }
];