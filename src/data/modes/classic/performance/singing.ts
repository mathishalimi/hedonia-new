import { Challenge, GameMode } from '../../../../types/game';

export const singingClassicChallenges: Challenge[] = [
  {
    id: 'classic_singing_1',
    text: "Chante le refrain de ta chanson préférée en mode opéra",
    type: 'dare',
    mode: GameMode.Classic,
    intensity: 'medium',
    shotsCount: 2
  },
  {
    id: 'classic_singing_2',
    text: "Fais un medley de 3 chansons différentes en 1 minute",
    type: 'dare',
    mode: GameMode.Classic,
    intensity: 'spicy',
    shotsCount: 3
  },
  {
    id: 'classic_singing_3',
    text: "Chante une chanson en remplaçant toutes les voyelles par 'i'",
    type: 'dare',
    mode: GameMode.Classic,
    intensity: 'medium',
    shotsCount: 2
  },
  {
    id: 'classic_singing_4',
    text: "Fais un duo avec le joueur de ton choix sur une chanson d'amour",
    type: 'dare',
    mode: GameMode.Classic,
    intensity: 'spicy',
    shotsCount: 3
  },
  {
    id: 'classic_singing_5',
    text: "Compose et chante un rap de 1 minute sur les autres joueurs",
    type: 'dare',
    mode: GameMode.Classic,
    intensity: 'extreme',
    shotsCount: 4
  }
];