import { Challenge, GameMode } from '../../types/game';

export const musicalChallenges: Challenge[] = [
  // Soft (0-25%)
  {
    id: 'musical_soft_1',
    text: "Chante le refrain de ta chanson préférée en changeant toutes les voyelles par 'i'",
    type: 'dare',
    mode: GameMode.Classic,
    intensity: 'soft',
    shotsCount: 1
  },
  {
    id: 'musical_soft_2',
    text: "Transforme une chanson connue en version opéra",
    type: 'dare',
    mode: GameMode.Classic,
    intensity: 'soft',
    shotsCount: 1
  },
  {
    id: 'musical_soft_3',
    text: "Fais un beatbox de 30 secondes sur un rythme simple",
    type: 'dare',
    mode: GameMode.Classic,
    intensity: 'soft',
    shotsCount: 1
  },
  // Medium (25-50%)
  {
    id: 'musical_medium_1',
    text: "Crée un mashup de 3 chansons différentes en direct",
    type: 'dare',
    mode: GameMode.Classic,
    intensity: 'medium',
    shotsCount: 2
  },
  {
    id: 'musical_medium_2',
    text: "Compose et chante un rap de 1 minute sur un thème donné par les autres",
    type: 'dare',
    mode: GameMode.Classic,
    intensity: 'medium',
    shotsCount: 2
  },
  {
    id: 'musical_medium_3',
    text: "Fais un medley de 5 génériques de séries TV",
    type: 'dare',
    mode: GameMode.Classic,
    intensity: 'medium',
    shotsCount: 2
  },
  // Spicy (50-75%)
  {
    id: 'musical_spicy_1',
    text: "Organise un mini-concert avec 3 styles musicaux différents",
    type: 'dare',
    mode: GameMode.Classic,
    intensity: 'spicy',
    shotsCount: 3
  },
  {
    id: 'musical_spicy_2',
    text: "Crée une chanson originale de 2 minutes avec des paroles improvisées",
    type: 'dare',
    mode: GameMode.Classic,
    intensity: 'spicy',
    shotsCount: 3
  },
  {
    id: 'musical_spicy_3',
    text: "Fais un battle de rap contre un autre joueur sur un thème imposé",
    type: 'dare',
    mode: GameMode.Classic,
    intensity: 'spicy',
    shotsCount: 3
  },
  // Extreme (75-100%)
  {
    id: 'musical_extreme_1',
    text: "Dirige un orchestre imaginaire où chaque joueur joue un instrument différent",
    type: 'dare',
    mode: GameMode.Classic,
    intensity: 'extreme',
    shotsCount: 4
  },
  {
    id: 'musical_extreme_2',
    text: "Crée et performe une comédie musicale improvisée de 3 minutes",
    type: 'dare',
    mode: GameMode.Classic,
    intensity: 'extreme',
    shotsCount: 4
  },
  {
    id: 'musical_extreme_3',
    text: "Organise un festival de musique miniature avec 5 performances différentes",
    type: 'dare',
    mode: GameMode.Classic,
    intensity: 'extreme',
    shotsCount: 4
  }
];