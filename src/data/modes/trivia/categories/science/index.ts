import { Challenge } from '../../../../types/game';
import { physicsTrivia } from './physics';
import { chemistryTrivia } from './chemistry';
import { biologyTrivia } from './biology';
import { astronomyTrivia } from './astronomy';
import { technologyTrivia } from './technology';
import { mathematicsTrivia } from './mathematics';
import { environmentTrivia } from './environment';
import { geneticsTrivia } from './genetics';

export const scienceTrivia: Challenge[] = [
  ...physicsTrivia,
  ...chemistryTrivia,
  ...biologyTrivia,
  ...astronomyTrivia,
  ...technologyTrivia,
  ...mathematicsTrivia,
  ...environmentTrivia,
  ...geneticsTrivia
];