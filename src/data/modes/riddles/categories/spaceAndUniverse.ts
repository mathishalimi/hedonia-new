import { Challenge, GameMode } from '../../../../types/game';

export const spaceAndUniverseRiddles: Challenge[] = [
  {
    id: 'riddle_space_1',
    text: "Je brille la nuit mais je n'ai pas de lumière. Qui suis-je ? (la lune)",
    type: 'riddle',
    mode: GameMode.Riddles,
    intensity: 'soft',
    shotsCount: 1
  },
  {
    id: 'riddle_space_2',
    text: "Je suis toujours là mais on ne me voit que la nuit. Qui suis-je ? (les étoiles)",
    type: 'riddle',
    mode: GameMode.Riddles,
    intensity: 'medium',
    shotsCount: 2
  },
  {
    id: 'riddle_space_3',
    text: "Je tourne sans fin mais je ne bouge jamais de place. Qui suis-je ? (une planète)",
    type: 'riddle',
    mode: GameMode.Riddles,
    intensity: 'spicy',
    shotsCount: 3
  },
  {
    id: 'riddle_space_4',
    text: "Je suis le plus chaud mais je parais froid. Qui suis-je ? (une étoile bleue)",
    type: 'riddle',
    mode: GameMode.Riddles,
    intensity: 'extreme',
    shotsCount: 4
  },
  {
    id: 'riddle_space_5',
    text: "Je suis si puissant que même la lumière ne peut m'échapper. Qui suis-je ? (un trou noir)",
    type: 'riddle',
    mode: GameMode.Riddles,
    intensity: 'extreme',
    shotsCount: 4
  }
];