import { Challenge, GameMode } from '../../../../types/game';

export const foodAndDrinkRiddles: Challenge[] = [
  {
    id: 'riddle_food_1',
    text: "Je suis né dans l'eau, je vis dans l'eau, mais si je bois de l'eau, je meurs. Qui suis-je ? (le sel)",
    type: 'riddle',
    mode: GameMode.Riddles,
    intensity: 'medium',
    shotsCount: 2
  },
  {
    id: 'riddle_food_2',
    text: "Plus je suis mûr, plus je suis tendre. Qui suis-je ? (le fromage)",
    type: 'riddle',
    mode: GameMode.Riddles,
    intensity: 'soft',
    shotsCount: 1
  },
  {
    id: 'riddle_food_3',
    text: "Je suis fait pour être mangé, mais je ne suis jamais mangé au repas. Qui suis-je ? (un plat)",
    type: 'riddle',
    mode: GameMode.Riddles,
    intensity: 'medium',
    shotsCount: 2
  },
  {
    id: 'riddle_food_4',
    text: "Je suis blanc comme la neige, sucré comme le miel, mais je ne suis ni neige ni miel. Qui suis-je ? (le sucre)",
    type: 'riddle',
    mode: GameMode.Riddles,
    intensity: 'spicy',
    shotsCount: 3
  },
  {
    id: 'riddle_food_5',
    text: "Je grandis sans être vivant, je n'ai pas de poumons mais j'ai besoin d'air. Qui suis-je ? (le pain)",
    type: 'riddle',
    mode: GameMode.Riddles,
    intensity: 'extreme',
    shotsCount: 4
  }
];