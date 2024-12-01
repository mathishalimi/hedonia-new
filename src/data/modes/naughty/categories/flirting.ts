import { Challenge, GameMode } from '../../../../types/game';

export const flirtingChallenges: Challenge[] = [
  {
    id: 'naughty_flirting_1',
    text: "Fais un compliment sensuel à chaque joueur",
    type: 'dare',
    mode: GameMode.Naughty,
    intensity: 'soft',
    shotsCount: 1
  },
  {
    id: 'naughty_flirting_2',
    text: "Susurre quelque chose de coquin à l'oreille d'un autre joueur",
    type: 'dare',
    mode: GameMode.Naughty,
    intensity: 'medium',
    shotsCount: 2
  },
  {
    id: 'naughty_flirting_3',
    text: "Fais un slow très rapproché avec le joueur de ton choix",
    type: 'dare',
    mode: GameMode.Naughty,
    intensity: 'spicy',
    shotsCount: 3
  },
  {
    id: 'naughty_flirting_4',
    text: "Mime ta technique de drague préférée",
    type: 'dare',
    mode: GameMode.Naughty,
    intensity: 'medium',
    shotsCount: 2
  },
  {
    id: 'naughty_flirting_5',
    text: "Fais une déclaration d'amour passionnée à un objet",
    type: 'dare',
    mode: GameMode.Naughty,
    intensity: 'spicy',
    shotsCount: 3
  }
];