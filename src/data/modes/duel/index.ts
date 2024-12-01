import { Challenge } from '../../../types/game';
import { physicalDuelChallenges } from './categories/physical';
import { mentalDuelChallenges } from './categories/mental';
import { performanceDuelChallenges } from './categories/performance';
import { drinkingDuelChallenges } from './categories/drinking';
import { skillDuelChallenges } from './categories/skill';

export const duelChallenges: Challenge[] = [
  ...physicalDuelChallenges,
  ...mentalDuelChallenges,
  ...performanceDuelChallenges,
  ...drinkingDuelChallenges,
  ...skillDuelChallenges
];