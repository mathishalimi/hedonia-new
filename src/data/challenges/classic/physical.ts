import { Challenge, GameMode } from '../../../types/game';

export const physicalChallenges: Challenge[] = [
  // Défis Physiques Légers (0-25%)
  {
    id: 'physical_soft_1',
    text: "Fais 10 squats en imitant un commentateur sportif",
    type: 'dare',
    mode: GameMode.Classic,
    intensity: 'soft',
    shotsCount: 1
  },
  {
    id: 'physical_soft_2',
    text: "Tiens en position de planche pendant 30 secondes en racontant une blague",
    type: 'dare',
    mode: GameMode.Classic,
    intensity: 'soft',
    shotsCount: 1
  },
  {
    id: 'physical_soft_3',
    text: "Fais 10 jumping jacks en chantant ton générique préféré",
    type: 'dare',
    mode: GameMode.Classic,
    intensity: 'soft',
    shotsCount: 1
  },
  // Défis Physiques Moyens (25-50%)
  {
    id: 'physical_medium_1',
    text: "Fais 15 pompes en racontant ton pire rendez-vous",
    type: 'dare',
    mode: GameMode.Classic,
    intensity: 'medium',
    shotsCount: 2
  },
  {
    id: 'physical_medium_2',
    text: "Tiens en position chaise contre le mur pendant 45 secondes en faisant un discours politique",
    type: 'dare',
    mode: GameMode.Classic,
    intensity: 'medium',
    shotsCount: 2
  },
  {
    id: 'physical_medium_3',
    text: "Fais 20 fentes alternées en imitant différents accents",
    type: 'dare',
    mode: GameMode.Classic,
    intensity: 'medium',
    shotsCount: 2
  },
  // Défis Physiques Épicés (50-75%)
  {
    id: 'physical_spicy_1',
    text: "Fais 25 burpees en racontant une histoire d'horreur",
    type: 'dare',
    mode: GameMode.Classic,
    intensity: 'spicy',
    shotsCount: 3
  },
  {
    id: 'physical_spicy_2',
    text: "Tiens en gainage pendant 1 minute en jouant au 'Petit Bac'",
    type: 'dare',
    mode: GameMode.Classic,
    intensity: 'spicy',
    shotsCount: 3
  },
  {
    id: 'physical_spicy_3',
    text: "Fais 30 mountain climbers en rappant",
    type: 'dare',
    mode: GameMode.Classic,
    intensity: 'spicy',
    shotsCount: 3
  },
  // Défis Physiques Extrêmes (75-100%)
  {
    id: 'physical_extreme_1',
    text: "Circuit training : 20 squats, 15 pompes, 10 burpees, sans pause",
    type: 'dare',
    mode: GameMode.Classic,
    intensity: 'extreme',
    shotsCount: 4
  },
  {
    id: 'physical_extreme_2',
    text: "Challenge 'Warrior' : 30 secondes de chaque : planche, chaise, gainage latéral gauche et droit",
    type: 'dare',
    mode: GameMode.Classic,
    intensity: 'extreme',
    shotsCount: 4
  },
  {
    id: 'physical_extreme_3',
    text: "Fais 40 jumping jacks en récitant l'alphabet à l'envers",
    type: 'dare',
    mode: GameMode.Classic,
    intensity: 'extreme',
    shotsCount: 4
  }
];