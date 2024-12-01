import { Challenge } from '../../../types/game';
import { scienceTrivia } from './categories/science';
import { historyTrivia } from './categories/history';
import { cultureTrivia } from './categories/culture';

export const triviaChallenges: Challenge[] = [
  ...scienceTrivia,
  ...historyTrivia,
  ...cultureTrivia
];