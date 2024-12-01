import { Challenge, GameMode } from '../../../types/game';

export const creativeChallenges: Challenge[] = [
  // Défis Créatifs Légers (0-25%)
  {
    id: 'creative_soft_1',
    text: "Dessine un portrait d'un autre joueur les yeux fermés",
    type: 'dare',
    mode: GameMode.Classic,
    intensity: 'soft',
    shotsCount: 1
  },
  {
    id: 'creative_soft_2',
    text: "Invente une publicité pour un objet ordinaire",
    type: 'dare',
    mode: GameMode.Classic,
    intensity: 'soft',
    shotsCount: 1
  },
  {
    id: 'creative_soft_3',
    text: "Crée une courte chanson sur le dernier message que tu as envoyé",
    type: 'dare',
    mode: GameMode.Classic,
    intensity: 'soft',
    shotsCount: 1
  },
  // Défis Créatifs Moyens (25-50%)
  {
    id: 'creative_medium_1',
    text: "Invente un nouveau sport avec les objets disponibles",
    type: 'dare',
    mode: GameMode.Classic,
    intensity: 'medium',
    shotsCount: 2
  },
  {
    id: 'creative_medium_2',
    text: "Crée et présente une collection de mode avec du papier toilette",
    type: 'dare',
    mode: GameMode.Classic,
    intensity: 'medium',
    shotsCount: 2
  },
  {
    id: 'creative_medium_3',
    text: "Compose et performe un rap sur la soirée en cours",
    type: 'dare',
    mode: GameMode.Classic,
    intensity: 'medium',
    shotsCount: 2
  },
  // Défis Créatifs Épicés (50-75%)
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
  {
    id: 'creative_spicy_3',
    text: "Invente une nouvelle langue et enseigne quelques phrases aux autres",
    type: 'dare',
    mode: GameMode.Classic,
    intensity: 'spicy',
    shotsCount: 3
  },
  // Défis Créatifs Extrêmes (75-100%)
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
  },
  {
    id: 'creative_extreme_3',
    text: "Organise un festival de talents avec 4 performances différentes",
    type: 'dare',
    mode: GameMode.Classic,
    intensity: 'extreme',
    shotsCount: 4
  }
];