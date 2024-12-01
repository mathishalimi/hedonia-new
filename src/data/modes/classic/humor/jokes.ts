import { Challenge, GameMode } from '../../../../types/game';

export const jokeClassicChallenges: Challenge[] = [
  {
    id: 'classic_humor_jokes_1',
    text: "Raconte une blague et si personne ne rit, bois 2 gorgées",
    type: 'dare',
    mode: GameMode.Classic,
    intensity: 'soft',
    shotsCount: 1
  },
  {
    id: 'classic_humor_jokes_2',
    text: "Fais un stand-up comedy de 1 minute sur un sujet choisi par les autres",
    type: 'dare',
    mode: GameMode.Classic,
    intensity: 'medium',
    shotsCount: 2
  },
  {
    id: 'classic_humor_jokes_3',
    text: "Raconte une histoire drôle qui t'est réellement arrivée",
    type: 'dare',
    mode: GameMode.Classic,
    intensity: 'medium',
    shotsCount: 2
  },
  {
    id: 'classic_humor_jokes_4',
    text: "Fais une imitation humoristique de chaque joueur",
    type: 'dare',
    mode: GameMode.Classic,
    intensity: 'spicy',
    shotsCount: 3
  },
  {
    id: 'classic_humor_jokes_5',
    text: "Invente et performe un sketch humoristique de 2 minutes",
    type: 'dare',
    mode: GameMode.Classic,
    intensity: 'extreme',
    shotsCount: 4
  }
];