import { Challenge } from '../../types/game';
import { physicalChallenges } from './physical';
import { impersonationChallenges } from './impersonations';
import { performanceChallenges } from './performance';
import { creativeChallenges } from './creative';
import { socialChallenges } from './social';
import { skillChallenges } from './skills';
import { memoryChallenges } from './memory';
import { musicalChallenges } from './musical';

// Total: 800 Classic Mode Challenges
export const challenges: Challenge[] = [
  ...physicalChallenges,    // 100 challenges
  ...impersonationChallenges, // 100 challenges
  ...performanceChallenges, // 100 challenges
  ...creativeChallenges,    // 100 challenges
  ...socialChallenges,      // 100 challenges
  ...skillChallenges,       // 100 challenges
  ...memoryChallenges,      // 100 challenges
  ...musicalChallenges      // 100 challenges
];