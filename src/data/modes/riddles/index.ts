import { Challenge } from '../../../types/game';
import { logicRiddles } from './categories/logic';
import { wordplayRiddles } from './categories/wordplay';
import { mathRiddles } from './categories/math';
import { natureRiddles } from './categories/nature';
import { objectRiddles } from './categories/objects';
import { timeRiddles } from './categories/time';
import { animalRiddles } from './categories/animals';
import { paradoxRiddles } from './categories/paradox';
import { foodAndDrinkRiddles } from './categories/foodAndDrink';
import { spaceAndUniverseRiddles } from './categories/spaceAndUniverse';

export const riddleChallenges: Challenge[] = [
  ...logicRiddles,
  ...wordplayRiddles,
  ...mathRiddles,
  ...natureRiddles,
  ...objectRiddles,
  ...timeRiddles,
  ...animalRiddles,
  ...paradoxRiddles,
  ...foodAndDrinkRiddles,
  ...spaceAndUniverseRiddles
];