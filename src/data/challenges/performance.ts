import { Challenge, GameMode } from '../../types/game';

export const performanceChallenges: Challenge[] = [
  // Soft (0-25%)
  {
    id: 'performance_soft_1',
    text: "Invente et performe une pub TV pour un objet complètement inutile",
    type: 'dare',
    mode: GameMode.Classic,
    intensity: 'soft',
    shotsCount: 1
  },
  {
    id: 'performance_soft_2',
    text: "Fais un rap improvisé sur les autres joueurs présents",
    type: 'dare',
    mode: GameMode.Classic,
    intensity: 'soft',
    shotsCount: 1
  },
  // Medium (25-50%)
  {
    id: 'performance_medium_1',
    text: "Crée et performe une chorégraphie sur un medley de génériques de séries TV",
    type: 'dare',
    mode: GameMode.Classic,
    intensity: 'medium',
    shotsCount: 2
  },
  {
    id: 'performance_medium_2',
    text: "Fais un cours de fitness délirant en mélangeant différents styles (yoga, zumba, boxe...)",
    type: 'dare',
    mode: GameMode.Classic,
    intensity: 'medium',
    shotsCount: 2
  },
  // Spicy (50-75%)
  {
    id: 'performance_spicy_1',
    text: "Organise un défilé de mode avec des objets trouvés dans la pièce",
    type: 'dare',
    mode: GameMode.Classic,
    intensity: 'spicy',
    shotsCount: 3
  },
  {
    id: 'performance_spicy_2',
    text: "Fais un spectacle de mime racontant une histoire choisie par les autres joueurs",
    type: 'dare',
    mode: GameMode.Classic,
    intensity: 'spicy',
    shotsCount: 3
  },
  // Extreme (75-100%)
  {
    id: 'performance_extreme_1',
    text: "Crée et performe un mini spectacle de cirque avec 3 numéros différents",
    type: 'dare',
    mode: GameMode.Classic,
    intensity: 'extreme',
    shotsCount: 4
  },
  {
    id: 'performance_extreme_2',
    text: "Organise un mini festival de musique en incarnant 4 artistes différents",
    type: 'dare',
    mode: GameMode.Classic,
    intensity: 'extreme',
    shotsCount: 4
  }
];