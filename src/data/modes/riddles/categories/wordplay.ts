import { Challenge, GameMode } from '../../../../types/game';

export const wordplayRiddles: Challenge[] = [
  {
    id: 'riddle_wordplay_1',
    text: "Je commence la nuit et je termine le matin. Qui suis-je ? (la lettre N)",
    type: 'riddle',
    mode: GameMode.Riddles,
    intensity: 'medium',
    shotsCount: 2
  },
  {
    id: 'riddle_wordplay_2',
    text: "Qu'est-ce qui peut remplir une pièce entière sans prendre de place ? (la lumière)",
    type: 'riddle',
    mode: GameMode.Riddles,
    intensity: 'medium',
    shotsCount: 2
  },
  {
    id: 'riddle_wordplay_3',
    text: "Je suis pris avant d'être vu. Qui suis-je ? (une photo)",
    type: 'riddle',
    mode: GameMode.Riddles,
    intensity: 'hard',
    shotsCount: 3
  },
  {
    id: 'riddle_wordplay_4',
    text: "On me prend pour un repas, je ne mange jamais. Qui suis-je ? (une assiette)",
    type: 'riddle',
    mode: GameMode.Riddles,
    intensity: 'medium',
    shotsCount: 2
  },
  {
    id: 'riddle_wordplay_5',
    text: "Je suis fait pour marcher mais je ne bouge jamais. Qui suis-je ? (un trottoir)",
    type: 'riddle',
    mode: GameMode.Riddles,
    intensity: 'hard',
    shotsCount: 3
  }
];