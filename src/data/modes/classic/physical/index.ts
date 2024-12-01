import { Challenge } from '../../../../types/game';
import { cardioClassicChallenges } from './cardio';
import { strengthClassicChallenges } from './strength';
import { flexibilityClassicChallenges } from './flexibility';

export const physicalClassicChallenges: Challenge[] = [
  ...cardioClassicChallenges,
  ...strengthClassicChallenges,
  ...flexibilityClassicChallenges
];