import { Challenge } from '../../../../types/game';
import { jokeClassicChallenges } from './jokes';
import { improvClassicChallenges } from './improv';
import { parodyClassicChallenges } from './parody';

export const humorClassicChallenges: Challenge[] = [
  ...jokeClassicChallenges,
  ...improvClassicChallenges,
  ...parodyClassicChallenges
];