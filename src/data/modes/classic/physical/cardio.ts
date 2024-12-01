import { Challenge, GameMode } from '../../../../types/game';

export const cardioClassicChallenges: Challenge[] = [
  {
    id: 'classic_cardio_1',
    text: "Fais 30 jumping jacks en chantant ton générique préféré",
    type: 'dare',
    mode: GameMode.Classic,
    intensity: 'medium',
    shotsCount: 2
  },
  {
    id: 'classic_cardio_2',
    text: "Course sur place pendant 1 minute en imitant un commentateur sportif",
    type: 'dare',
    mode: GameMode.Classic,
    intensity: 'medium',
    shotsCount: 2
  },
  {
    id: 'classic_cardio_3',
    text: "Fais 20 mountain climbers en racontant une blague",
    type: 'dare',
    mode: GameMode.Classic,
    intensity: 'spicy',
    shotsCount: 3
  },
  {
    id: 'classic_cardio_4',
    text: "Saute à la corde imaginaire pendant 45 secondes en rappant",
    type: 'dare',
    mode: GameMode.Classic,
    intensity: 'medium',
    shotsCount: 2
  },
  {
    id: 'classic_cardio_5',
    text: "Fais 15 burpees en comptant à l'envers",
    type: 'dare',
    mode: GameMode.Classic,
    intensity: 'extreme',
    shotsCount: 4
  }
];