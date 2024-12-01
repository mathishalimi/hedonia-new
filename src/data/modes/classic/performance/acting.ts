import { Challenge, GameMode } from '../../../../types/game';

export const actingClassicChallenges: Challenge[] = [
  {
    id: 'classic_acting_1',
    text: "Mime une scène de film célèbre et fais-la deviner aux autres",
    type: 'dare',
    mode: GameMode.Classic,
    intensity: 'medium',
    shotsCount: 2
  },
  {
    id: 'classic_acting_2',
    text: "Fais un monologue dramatique sur la dernière chose que tu as mangée",
    type: 'dare',
    mode: GameMode.Classic,
    intensity: 'medium',
    shotsCount: 2
  },
  {
    id: 'classic_acting_3',
    text: "Imite trois célébrités différentes en une minute",
    type: 'dare',
    mode: GameMode.Classic,
    intensity: 'spicy',
    shotsCount: 3
  },
  {
    id: 'classic_acting_4',
    text: "Joue une scène d'amour avec un objet de ton choix",
    type: 'dare',
    mode: GameMode.Classic,
    intensity: 'spicy',
    shotsCount: 3
  },
  {
    id: 'classic_acting_5',
    text: "Fais un one-man-show de 2 minutes sur un sujet donné par les autres",
    type: 'dare',
    mode: GameMode.Classic,
    intensity: 'extreme',
    shotsCount: 4
  }
];