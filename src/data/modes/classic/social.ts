import { Challenge, GameMode } from '../../../types/game';

// 125 Social Challenges
export const socialChallenges: Challenge[] = [
  // Soft (0-25%) - 31 challenges
  {
    id: 'social_soft_1',
    text: "Échange ton rôle social avec un autre joueur pendant 3 tours",
    type: 'dare',
    mode: GameMode.Classic,
    intensity: 'soft',
    shotsCount: 1
  },
  // ... Add 30 more soft social challenges

  // Medium (25-50%) - 31 challenges
  {
    id: 'social_medium_1',
    text: "Organise un mini talk-show où tu interviewes les autres joueurs sur des sujets absurdes",
    type: 'dare',
    mode: GameMode.Classic,
    intensity: 'medium',
    shotsCount: 2
  },
  // ... Add 30 more medium social challenges

  // Spicy (50-75%) - 31 challenges
  {
    id: 'social_spicy_1',
    text: "Organise un tribunal où tu accuses chaque joueur d'un crime imaginaire absurde",
    type: 'dare',
    mode: GameMode.Classic,
    intensity: 'spicy',
    shotsCount: 3
  },
  // ... Add 30 more spicy social challenges

  // Extreme (75-100%) - 32 challenges
  {
    id: 'social_extreme_1',
    text: "Organise une cérémonie de remise des prix en roastant gentiment chaque joueur",
    type: 'dare',
    mode: GameMode.Classic,
    intensity: 'extreme',
    shotsCount: 4
  },
  // ... Add 31 more extreme social challenges
];