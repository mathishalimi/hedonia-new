import { Challenge, GameMode } from '../../../../types/game';

export const logicRiddles: Challenge[] = [
  {
    id: 'riddle_logic_1',
    text: "Je suis ce que je suis, mais je ne suis pas ce que je suis. Si j'étais ce que je suis, je ne serais pas ce que je suis. Qui suis-je ? (une ombre)",
    type: 'riddle',
    mode: GameMode.Riddles,
    intensity: 'medium',
    shotsCount: 2
  },
  {
    id: 'riddle_logic_2',
    text: "Plus j'ai de gardiens, moins je suis en sécurité. Qui suis-je ? (un secret)",
    type: 'riddle',
    mode: GameMode.Riddles,
    intensity: 'medium',
    shotsCount: 2
  },
  {
    id: 'riddle_logic_3',
    text: "Je parle toutes les langues mais n'en connais aucune. Qui suis-je ? (l'écho)",
    type: 'riddle',
    mode: GameMode.Riddles,
    intensity: 'hard',
    shotsCount: 3
  },
  {
    id: 'riddle_logic_4',
    text: "Plus je sèche, plus je suis mouillée. Que suis-je ? (une serviette)",
    type: 'riddle',
    mode: GameMode.Riddles,
    intensity: 'medium',
    shotsCount: 2
  },
  {
    id: 'riddle_logic_5',
    text: "Je grandis en descendant. Qui suis-je ? (une racine)",
    type: 'riddle',
    mode: GameMode.Riddles,
    intensity: 'hard',
    shotsCount: 3
  }
];