import { GameMode } from '../../types/game';

export const softPenalties = [
  // Physical Challenges (25)
  {
    id: 'penalty_soft_physical_1',
    text: "Fais 10 squats en imitant un commentateur sportif",
    intensity: 'soft',
    mode: GameMode.Classic,
    shotsCount: 1
  },
  {
    id: 'penalty_soft_physical_2',
    text: "Tiens en position de planche pendant 30 secondes en racontant une blague",
    intensity: 'soft',
    mode: GameMode.Classic,
    shotsCount: 1
  },
  // ... Add 23 more physical penalties

  // Performance Challenges (25)
  {
    id: 'penalty_soft_performance_1',
    text: "Fais une pub TV pour un produit imaginaire ridicule",
    intensity: 'soft',
    mode: GameMode.Classic,
    shotsCount: 1
  },
  // ... Add 24 more performance penalties

  // Social Challenges (25)
  {
    id: 'penalty_soft_social_1',
    text: "Fais un compliment original à chaque joueur",
    intensity: 'soft',
    mode: GameMode.Classic,
    shotsCount: 1
  },
  // ... Add 24 more social penalties

  // Creative Challenges (25)
  {
    id: 'penalty_soft_creative_1',
    text: "Invente une courte histoire en utilisant 5 mots choisis par les autres joueurs",
    intensity: 'soft',
    mode: GameMode.Classic,
    shotsCount: 1
  }
  // ... Add 24 more creative penalties
];