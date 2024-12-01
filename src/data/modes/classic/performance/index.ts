import { Challenge } from '../../../../types/game';
import { actingClassicChallenges } from './acting';
import { dancingClassicChallenges } from './dancing';
import { singingClassicChallenges } from './singing';

export const performanceClassicChallenges: Challenge[] = [
  ...actingClassicChallenges,
  ...dancingClassicChallenges,
  ...singingClassicChallenges
];