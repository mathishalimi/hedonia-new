import { Challenge, GameMode } from '../../../../types/game';

export const interactionClassicChallenges: Challenge[] = [
  {
    id: 'classic_social_interaction_1',
    text: "Fais un compliment sincère à chaque joueur",
    type: 'dare',
    mode: GameMode.Classic,
    intensity: 'soft',
    shotsCount: 1
  },
  {
    id: 'classic_social_interaction_2',
    text: "Organise un mini talk-show où tu interviewes deux autres joueurs",
    type: 'dare',
    mode: GameMode.Classic,
    intensity: 'medium',
    shotsCount: 2
  },
  {
    id: 'classic_social_interaction_3',
    text: "Fais un speed dating de 30 secondes avec chaque joueur",
    type: 'dare',
    mode: GameMode.Classic,
    intensity: 'medium',
    shotsCount: 2
  },
  {
    id: 'classic_social_interaction_4',
    text: "Crée une histoire collaborative où chaque joueur ajoute une phrase",
    type: 'dare',
    mode: GameMode.Classic,
    intensity: 'medium',
    shotsCount: 2
  },
  {
    id: 'classic_social_interaction_5',
    text: "Imite chaque joueur et fais deviner qui tu imites",
    type: 'dare',
    mode: GameMode.Classic,
    intensity: 'spicy',
    shotsCount: 3
  }
];