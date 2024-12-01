import { Challenge, GameMode } from '../../../../types/game';

export const inventionClassicChallenges: Challenge[] = [
  {
    id: 'classic_creative_invention_1',
    text: "Crée un instrument de musique avec des objets du quotidien",
    type: 'dare',
    mode: GameMode.Classic,
    intensity: 'medium',
    shotsCount: 2
  },
  {
    id: 'classic_creative_invention_2',
    text: "Invente un nouveau sport avec les objets disponibles et explique les règles",
    type: 'dare',
    mode: GameMode.Classic,
    intensity: 'spicy',
    shotsCount: 3
  },
  {
    id: 'classic_creative_invention_3',
    text: "Crée un cocktail original avec les ingrédients disponibles",
    type: 'dare',
    mode: GameMode.Classic,
    intensity: 'medium',
    shotsCount: 2
  },
  {
    id: 'classic_creative_invention_4',
    text: "Invente une nouvelle danse et donne-lui un nom",
    type: 'dare',
    mode: GameMode.Classic,
    intensity: 'spicy',
    shotsCount: 3
  },
  {
    id: 'classic_creative_invention_5',
    text: "Crée un jeu de société improvisé et fais-le tester aux autres joueurs",
    type: 'dare',
    mode: GameMode.Classic,
    intensity: 'extreme',
    shotsCount: 4
  }
];