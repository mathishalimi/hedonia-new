import { Challenge, GameMode } from '../../../../types/game';

export const timeRiddles: Challenge[] = [
  {
    id: 'riddle_time_1',
    text: "Je cours toute la journée mais je ne bouge jamais. Qui suis-je ? (le temps)",
    type: 'riddle',
    mode: GameMode.Riddles,
    intensity: 'medium',
    shotsCount: 2
  },
  {
    id: 'riddle_time_2',
    text: "Je passe devant le soleil sans faire d'ombre. Qui suis-je ? (le vent)",
    type: 'riddle',
    mode: GameMode.Riddles,
    intensity: 'spicy',
    shotsCount: 3
  },
  {
    id: 'riddle_time_3',
    text: "Je suis toujours devant toi mais tu ne peux jamais me voir. Qui suis-je ? (le futur)",
    type: 'riddle',
    mode: GameMode.Riddles,
    intensity: 'medium',
    shotsCount: 2
  },
  {
    id: 'riddle_time_4',
    text: "Plus j'avance, plus je laisse derrière moi. Qui suis-je ? (le passé)",
    type: 'riddle',
    mode: GameMode.Riddles,
    intensity: 'spicy',
    shotsCount: 3
  },
  {
    id: 'riddle_time_5',
    text: "Je ne fais pas de bruit quand je passe, mais je ne reviens jamais. Qui suis-je ? (le temps)",
    type: 'riddle',
    mode: GameMode.Riddles,
    intensity: 'extreme',
    shotsCount: 4
  }
];