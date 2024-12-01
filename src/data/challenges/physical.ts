import { Challenge, GameMode } from '../../types/game';

export const physicalChallenges: Challenge[] = [
  // Soft (0-25%)
  {
    id: 'physical_soft_1',
    text: "Fais 15 squats en imitant une voix de robot",
    type: 'dare',
    mode: GameMode.Classic,
    intensity: 'soft',
    shotsCount: 1
  },
  {
    id: 'physical_soft_2',
    text: "Tiens en position de planche pendant que les autres joueurs te racontent des blagues",
    type: 'dare',
    mode: GameMode.Classic,
    intensity: 'soft',
    shotsCount: 1
  },
  {
    id: 'physical_soft_3',
    text: "Fais 10 jumping jacks en chantant ton générique de dessin animé préféré",
    type: 'dare',
    mode: GameMode.Classic,
    intensity: 'soft',
    shotsCount: 1
  },
  {
    id: 'physical_soft_4',
    text: "Fais le tour de la pièce en marchant comme un crabe tout en racontant ta journée",
    type: 'dare',
    mode: GameMode.Classic,
    intensity: 'soft',
    shotsCount: 1
  },
  {
    id: 'physical_soft_5',
    text: "Fais 20 pas chassés en imitant un commentateur sportif",
    type: 'dare',
    mode: GameMode.Classic,
    intensity: 'soft',
    shotsCount: 1
  },
  // Medium (25-50%)
  {
    id: 'physical_medium_1',
    text: "Fais 20 burpees en racontant ton pire rendez-vous amoureux",
    type: 'dare',
    mode: GameMode.Classic,
    intensity: 'medium',
    shotsCount: 2
  },
  {
    id: 'physical_medium_2',
    text: "Tiens en position chaise contre le mur pendant 1 minute en faisant un discours politique improvisé",
    type: 'dare',
    mode: GameMode.Classic,
    intensity: 'medium',
    shotsCount: 2
  },
  {
    id: 'physical_medium_3',
    text: "Fais 25 fentes en alternance en imitant différents accents à chaque pas",
    type: 'dare',
    mode: GameMode.Classic,
    intensity: 'medium',
    shotsCount: 2
  },
  {
    id: 'physical_medium_4',
    text: "Fais 30 secondes de corde à sauter imaginaire en rappant",
    type: 'dare',
    mode: GameMode.Classic,
    intensity: 'medium',
    shotsCount: 2
  },
  {
    id: 'physical_medium_5',
    text: "Fais 15 pompes en comptant en langues différentes",
    type: 'dare',
    mode: GameMode.Classic,
    intensity: 'medium',
    shotsCount: 2
  },
  // Spicy (50-75%)
  {
    id: 'physical_spicy_1',
    text: "Fais 30 pompes en récitant les paroles d'une chanson à l'envers",
    type: 'dare',
    mode: GameMode.Classic,
    intensity: 'spicy',
    shotsCount: 3
  },
  {
    id: 'physical_spicy_2',
    text: "Course sur place pendant 2 minutes en imitant différents styles de course (marathon, sprint, course-poursuite de film d'action)",
    type: 'dare',
    mode: GameMode.Classic,
    intensity: 'spicy',
    shotsCount: 3
  },
  {
    id: 'physical_spicy_3',
    text: "Fais 40 mountain climbers en racontant une histoire d'horreur",
    type: 'dare',
    mode: GameMode.Classic,
    intensity: 'spicy',
    shotsCount: 3
  },
  {
    id: 'physical_spicy_4',
    text: "Tiens en équilibre sur un pied pendant 1 minute en jonglant avec 3 objets",
    type: 'dare',
    mode: GameMode.Classic,
    intensity: 'spicy',
    shotsCount: 3
  },
  {
    id: 'physical_spicy_5',
    text: "Fais 50 jumping jacks en faisant un karaoké",
    type: 'dare',
    mode: GameMode.Classic,
    intensity: 'spicy',
    shotsCount: 3
  },
  // Extreme (75-100%)
  {
    id: 'physical_extreme_1',
    text: "Parcours du combattant : 20 burpees, 30 squats, 40 jumping jacks, le tout en moins de 3 minutes",
    type: 'dare',
    mode: GameMode.Classic,
    intensity: 'extreme',
    shotsCount: 4
  },
  {
    id: 'physical_extreme_2',
    text: "Challenge 'Spartiate' : 50 pompes, 50 squats, 50 abdos, 50 secondes de planche",
    type: 'dare',
    mode: GameMode.Classic,
    intensity: 'extreme',
    shotsCount: 4
  },
  {
    id: 'physical_extreme_3',
    text: "Fais 100 sauts à la corde imaginaire en faisant un stand-up comedy",
    type: 'dare',
    mode: GameMode.Classic,
    intensity: 'extreme',
    shotsCount: 4
  },
  {
    id: 'physical_extreme_4',
    text: "Tiens 3 minutes en gainage en jouant au 'Petit Bac' avec les autres joueurs",
    type: 'dare',
    mode: GameMode.Classic,
    intensity: 'extreme',
    shotsCount: 4
  },
  {
    id: 'physical_extreme_5',
    text: "Fais 60 burpees en racontant ton film préféré scène par scène",
    type: 'dare',
    mode: GameMode.Classic,
    intensity: 'extreme',
    shotsCount: 4
  }
];