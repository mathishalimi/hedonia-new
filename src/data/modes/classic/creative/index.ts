import { Challenge } from '../../../../types/game';
import { artisticClassicChallenges } from './artistic';
import { storytellingClassicChallenges } from './storytelling';
import { inventionClassicChallenges } from './invention';

export const creativeClassicChallenges: Challenge[] = [
  ...artisticClassicChallenges,
  ...storytellingClassicChallenges,
  ...inventionClassicChallenges
];