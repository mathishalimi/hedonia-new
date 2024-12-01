import { Challenge, GameMode } from '../../../../types/game';

export const natureRiddles: Challenge[] = [
  {
    id: 'riddle_nature_1',
    text: "Je monte et descends sans bouger. Qui suis-je ? (la température)",
    type: 'riddle',
    mode: GameMode.Riddles,
    intensity: 'medium',
    shotsCount: 2
  },
  {
    id: 'riddle_nature_2',
    text: "Je tombe sans me faire mal. Qui suis-je ? (la pluie)",
    type: 'riddle',
    mode: GameMode.Riddles,
    intensity: 'soft',
    shotsCount: 1
  },
  {
    id: 'riddle_nature_3',
    text: "Je suis plein de trous mais je retiens l'eau. Qui suis-je ? (une éponge)",
    type: 'riddle',
    mode: GameMode.Riddles,
    intensity: 'medium',
    shotsCount: 2
  },
  {
    id: 'riddle_nature_4',
    text: "Plus je suis chaud, plus je suis frais. Qui suis-je ? (le pain)",
    type: 'riddle',
    mode: GameMode.Riddles,
    intensity: 'spicy',
    shotsCount: 3
  },
  {
    id: 'riddle_nature_5',
    text: "Je nais dans l'eau, je vis dans l'air, et je meurs dans le feu. Qui suis-je ? (une bulle)",
    type: 'riddle',
    mode: GameMode.Riddles,
    intensity: 'extreme',
    shotsCount: 4
  }
];