import { Challenge } from '../../../types/game';
import { physicalClassicChallenges } from './physical';
import { performanceClassicChallenges } from './performance';
import { socialClassicChallenges } from './social';
import { creativeClassicChallenges } from './creative';
import { humorClassicChallenges } from './humor';

export const classicChallenges: Challenge[] = [
  ...physicalClassicChallenges,
  ...performanceClassicChallenges,
  ...socialClassicChallenges,
  ...creativeClassicChallenges,
  ...humorClassicChallenges
];