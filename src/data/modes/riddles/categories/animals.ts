import { Challenge, GameMode } from '../../../../types/game';

export const animalRiddles: Challenge[] = [
  {
    id: 'riddle_animals_1',
    text: "Je porte une maison sur mon dos. Qui suis-je ? (un escargot)",
    type: 'riddle',
    mode: GameMode.Riddles,
    intensity: 'soft',
    shotsCount: 1
  },
  {
    id: 'riddle_animals_2',
    text: "Je suis grand quand je suis jeune et petit quand je suis vieux. Qui suis-je ? (une bougie)",
    type: 'riddle',
    mode: GameMode.Riddles,
    intensity: 'medium',
    shotsCount: 2
  },
  {
    id: 'riddle_animals_3',
    text: "Je vole sans ailes, je pleure sans yeux. Qui suis-je ? (un nuage)",
    type: 'riddle',
    mode: GameMode.Riddles,
    intensity: 'spicy',
    shotsCount: 3
  },
  {
    id: 'riddle_animals_4',
    text: "Je change de couleur selon mon humeur. Qui suis-je ? (un caméléon)",
    type: 'riddle',
    mode: GameMode.Riddles,
    intensity: 'medium',
    shotsCount: 2
  },
  {
    id: 'riddle_animals_5',
    text: "Je dors la tête en bas. Qui suis-je ? (une chauve-souris)",
    type: 'riddle',
    mode: GameMode.Riddles,
    intensity: 'soft',
    shotsCount: 1
  }
];