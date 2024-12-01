import { Challenge, GameMode } from '../../../types/game';

// 125 Creative Challenges
export const creativeChallenges: Challenge[] = [
  // Soft (0-25%) - 31 challenges
  {
    id: 'creative_soft_1',
    text: "Invente et chante une chanson sur le dernier message que tu as envoyé",
    type: 'dare',
    mode: GameMode.Classic,
    intensity: 'soft',
    shotsCount: 1
  },
  // ... Add 30 more soft creative challenges

  // Medium (25-50%) - 31 challenges
  {
    id: 'creative_medium_1',
    text: "Invente un nouveau sport avec les objets disponibles et explique les règles",
    type: 'dare',
    mode: GameMode.Classic,
    intensity: 'medium',
    shotsCount: 2
  },
  // ... Add 30 more medium creative challenges

  // Spicy (50-75%) - 31 challenges
  {
    id: 'creative_spicy_1',
    text: "Invente et démontre 3 nouvelles danses avec des noms ridicules",
    type: 'dare',
    mode: GameMode.Classic,
    intensity: 'spicy',
    shotsCount: 3
  },
  // ... Add 30 more spicy creative challenges

  // Extreme (75-100%) - 32 challenges
  {
    id: 'creative_extreme_1',
    text: "Monte un spectacle de marionnettes improvisé avec des objets du quotidien",
    type: 'dare',
    mode: GameMode.Classic,
    intensity: 'extreme',
    shotsCount: 4
  },
  // ... Add 31 more extreme creative challenges
];