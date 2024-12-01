import { Challenge, GameMode } from '../../types/game';

export const creativeChallenges: Challenge[] = [
  // Soft (0-25%)
  {
    id: 'creative_soft_1',
    text: "Invente et chante une chanson sur le dernier message que tu as envoyé",
    type: 'dare',
    mode: GameMode.Classic,
    intensity: 'soft',
    shotsCount: 1
  },
  {
    id: 'creative_soft_2',
    text: "Crée une histoire collaborative où chaque joueur ajoute une phrase de plus en plus absurde",
    type: 'dare',
    mode: GameMode.Classic,
    intensity: 'soft',
    shotsCount: 1
  },
  // Medium (25-50%)
  {
    id: 'creative_medium_1',
    text: "Invente un nouveau sport avec les objets disponibles et explique les règles",
    type: 'dare',
    mode: GameMode.Classic,
    intensity: 'medium',
    shotsCount: 2
  },
  {
    id: 'creative_medium_2',
    text: "Crée et présente une collection de mode en n'utilisant que du papier toilette",
    type: 'dare',
    mode: GameMode.Classic,
    intensity: 'medium',
    shotsCount: 2
  },
  // Spicy (50-75%)
  {
    id: 'creative_spicy_1',
    text: "Invente et démontre 3 nouvelles danses avec des noms ridicules",
    type: 'dare',
    mode: GameMode.Classic,
    intensity: 'spicy',
    shotsCount: 3
  },
  {
    id: 'creative_spicy_2',
    text: "Crée un sketch humoristique basé sur les pires habitudes des autres joueurs",
    type: 'dare',
    mode: GameMode.Classic,
    intensity: 'spicy',
    shotsCount: 3
  },
  // Extreme (75-100%)
  {
    id: 'creative_extreme_1',
    text: "Monte un spectacle de marionnettes improvisé avec des objets du quotidien",
    type: 'dare',
    mode: GameMode.Classic,
    intensity: 'extreme',
    shotsCount: 4
  },
  {
    id: 'creative_extreme_2',
    text: "Crée et performe une comédie musicale sur la soirée en cours",
    type: 'dare',
    mode: GameMode.Classic,
    intensity: 'extreme',
    shotsCount: 4
  }
];