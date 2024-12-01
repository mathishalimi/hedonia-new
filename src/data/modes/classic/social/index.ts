import { Challenge } from '../../../../types/game';
import { interactionClassicChallenges } from './interaction';
import { roleplayClassicChallenges } from './roleplay';
import { groupClassicChallenges } from './group';

export const socialClassicChallenges: Challenge[] = [
  ...interactionClassicChallenges,
  ...roleplayClassicChallenges,
  ...groupClassicChallenges
];