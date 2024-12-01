import { Challenge } from '../../../../types/game';
import { movieTrivia } from './movies';
import { musicTrivia } from './music';
import { sportsTrivia } from './sports';
import { literatureTrivia } from './literature';
import { artTrivia } from './art';
import { gamingTrivia } from './gaming';
import { fashionTrivia } from './fashion';

export const cultureTrivia: Challenge[] = [
  ...movieTrivia,
  ...musicTrivia,
  ...sportsTrivia,
  ...literatureTrivia,
  ...artTrivia,
  ...gamingTrivia,
  ...fashionTrivia
];