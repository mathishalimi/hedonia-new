import { Challenge, GameMode } from '../../types/game';

export const memoryChallenges: Challenge[] = [
  // Soft (0-25%)
  {
    id: 'memory_soft_1',
    text: "Récite l'alphabet à l'envers en moins de 30 secondes",
    type: 'dare',
    mode: GameMode.Classic,
    intensity: 'soft',
    shotsCount: 1
  },
  {
    id: 'memory_soft_2',
    text: "Mémorise et répète une phrase complexe dite par chaque joueur",
    type: 'dare',
    mode: GameMode.Classic,
    intensity: 'soft',
    shotsCount: 1
  },
  {
    id: 'memory_soft_3',
    text: "Cite 10 capitales européennes en 30 secondes",
    type: 'dare',
    mode: GameMode.Classic,
    intensity: 'soft',
    shotsCount: 1
  },
  // Medium (25-50%)
  {
    id: 'memory_medium_1',
    text: "Mémorise et reproduis une séquence de 8 mouvements montrés par les autres joueurs",
    type: 'dare',
    mode: GameMode.Classic,
    intensity: 'medium',
    shotsCount: 2
  },
  {
    id: 'memory_medium_2',
    text: "Récite les paroles d'une chanson choisie par les autres à l'envers",
    type: 'dare',
    mode: GameMode.Classic,
    intensity: 'medium',
    shotsCount: 2
  },
  {
    id: 'memory_medium_3',
    text: "Mémorise et dessine un dessin complexe après l'avoir vu pendant 10 secondes",
    type: 'dare',
    mode: GameMode.Classic,
    intensity: 'medium',
    shotsCount: 2
  },
  // Spicy (50-75%)
  {
    id: 'memory_spicy_1',
    text: "Mémorise et récite un poème improvisé par les autres joueurs",
    type: 'dare',
    mode: GameMode.Classic,
    intensity: 'spicy',
    shotsCount: 3
  },
  {
    id: 'memory_spicy_2',
    text: "Reproduis une chorégraphie complexe après l'avoir vue une seule fois",
    type: 'dare',
    mode: GameMode.Classic,
    intensity: 'spicy',
    shotsCount: 3
  },
  {
    id: 'memory_spicy_3',
    text: "Mémorise et raconte une histoire inventée par les autres avec 10 éléments imposés",
    type: 'dare',
    mode: GameMode.Classic,
    intensity: 'spicy',
    shotsCount: 3
  },
  // Extreme (75-100%)
  {
    id: 'memory_extreme_1',
    text: "Mémorise et reproduis une séquence de 15 actions différentes",
    type: 'dare',
    mode: GameMode.Classic,
    intensity: 'extreme',
    shotsCount: 4
  },
  {
    id: 'memory_extreme_2',
    text: "Récite un texte complexe tout en exécutant une chorégraphie apprise juste avant",
    type: 'dare',
    mode: GameMode.Classic,
    intensity: 'extreme',
    shotsCount: 4
  },
  {
    id: 'memory_extreme_3',
    text: "Mémorise et reproduis les actions de 3 joueurs différents simultanément",
    type: 'dare',
    mode: GameMode.Classic,
    intensity: 'extreme',
    shotsCount: 4
  }
];