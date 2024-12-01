import { Challenge, GameMode } from '../../../../types/game';

export const paradoxRiddles: Challenge[] = [
  {
    id: 'riddle_paradox_1',
    text: "Plus tu en prends, plus j'en ai. Qui suis-je ? (des empreintes)",
    type: 'riddle',
    mode: GameMode.Riddles,
    intensity: 'medium',
    shotsCount: 2
  },
  {
    id: 'riddle_paradox_2',
    text: "Plus je suis chaud, plus je suis frais. Qui suis-je ? (le pain)",
    type: 'riddle',
    mode: GameMode.Riddles,
    intensity: 'spicy',
    shotsCount: 3
  },
  {
    id: 'riddle_paradox_3',
    text: "Plus je suis présent, moins je suis visible. Qui suis-je ? (l'obscurité)",
    type: 'riddle',
    mode: GameMode.Riddles,
    intensity: 'medium',
    shotsCount: 2
  },
  {
    id: 'riddle_paradox_4',
    text: "Plus tu me donnes à manger, plus je m'affaiblis. Qui suis-je ? (le feu)",
    type: 'riddle',
    mode: GameMode.Riddles,
    intensity: 'spicy',
    shotsCount: 3
  },
  {
    id: 'riddle_paradox_5',
    text: "Plus tu me serres, plus je m'échappe. Qui suis-je ? (le sable)",
    type: 'riddle',
    mode: GameMode.Riddles,
    intensity: 'extreme',
    shotsCount: 4
  }
];