import { Challenge } from '../../../../types/game';
import { ancientHistoryTrivia } from './ancient';
import { modernHistoryTrivia } from './modern';

export const historyTrivia: Challenge[] = [
  ...ancientHistoryTrivia,
  ...modernHistoryTrivia
];