import { Challenge } from '../../../types/game';
import { physicalChallenges } from './physical';
import { socialChallenges } from './social';
import { creativeChallenges } from './creative';
import { musicalChallenges } from './musical';
import { impersonationChallenges } from './impersonation';
import { memoryChallenges } from './memory';
import { skillChallenges } from './skills';

// Combine all classic mode challenges
export const classicChallenges: Challenge[] = [
  ...physicalChallenges,
  ...socialChallenges,
  ...creativeChallenges,
  ...musicalChallenges,
  ...impersonationChallenges,
  ...memoryChallenges,
  ...skillChallenges
];