import { Challenge, GameMode } from '../../../types/game';

// 125 Performance Challenges
export const performanceChallenges: Challenge[] = [
  // Soft (0-25%) - 31 challenges
  {
    id: 'performance_soft_1',
    text: "Invente et performe une pub TV pour un objet complètement inutile",
    type: 'dare',
    mode: GameMode.Classic,
    intensity: 'soft',
    shotsCount: 1
  },
  // ... Add 30 more soft performance challenges

  // Medium (25-50%) - 31 challenges
  {
    id: 'performance_medium_1',
    text: "Crée et performe une chorégraphie sur un medley de génériques de séries TV",
    type: 'dare',
    mode: GameMode.Classic,
    intensity: 'medium',
    shotsCount: 2
  },
  // ... Add 30 more medium performance challenges

  // Spicy (50-75%) - 31 challenges
  {
    id: 'performance_spicy_1',
    text: "Organise un défilé de mode avec des objets trouvés dans la pièce",
    type: 'dare',
    mode: GameMode.Classic,
    intensity: 'spicy',
    shotsCount: 3
  },
  // ... Add 30 more spicy performance challenges

  // Extreme (75-100%) - 32 challenges
  {
    id: 'performance_extreme_1',
    text: "Crée et performe un mini spectacle de cirque avec 3 numéros différents",
    type: 'dare',
    mode: GameMode.Classic,
    intensity: 'extreme',
    shotsCount: 4
  },
  // ... Add 31 more extreme performance challenges
];