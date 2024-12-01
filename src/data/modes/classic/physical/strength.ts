import { Challenge, GameMode } from '../../../../types/game';

export const strengthClassicChallenges: Challenge[] = [
  {
    id: 'classic_strength_1',
    text: "Fais 15 pompes en racontant ton pire rendez-vous",
    type: 'dare',
    mode: GameMode.Classic,
    intensity: 'spicy',
    shotsCount: 3
  },
  {
    id: 'classic_strength_2',
    text: "Tiens une position de planche pendant 45 secondes en récitant l'alphabet à l'envers",
    type: 'dare',
    mode: GameMode.Classic,
    intensity: 'medium',
    shotsCount: 2
  },
  {
    id: 'classic_strength_3',
    text: "Fais 20 squats en imitant une célébrité",
    type: 'dare',
    mode: GameMode.Classic,
    intensity: 'medium',
    shotsCount: 2
  },
  {
    id: 'classic_strength_4',
    text: "Fais 10 dips sur une chaise en chantant ta chanson préférée",
    type: 'dare',
    mode: GameMode.Classic,
    intensity: 'spicy',
    shotsCount: 3
  },
  {
    id: 'classic_strength_5',
    text: "Tiens une position de chaise contre le mur pendant 1 minute en faisant un discours politique",
    type: 'dare',
    mode: GameMode.Classic,
    intensity: 'extreme',
    shotsCount: 4
  }
];