import { Challenge } from '../../../types/game';
import { flirtingChallenges } from './categories/flirting';
import { dancingChallenges } from './categories/dancing';
import { massageChallenges } from './categories/massage';
import { roleplayChallenges } from './categories/roleplay';
import { truthChallenges } from './categories/truth';

export const naughtyChallenges: Challenge[] = [
  ...flirtingChallenges,
  ...dancingChallenges,
  ...massageChallenges,
  ...roleplayChallenges,
  ...truthChallenges
];