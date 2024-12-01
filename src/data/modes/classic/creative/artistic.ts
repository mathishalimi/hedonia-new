import { Challenge, GameMode } from '../../../../types/game';

export const artisticClassicChallenges: Challenge[] = [
  {
    id: 'classic_creative_artistic_1',
    text: "Dessine un portrait d'un autre joueur les yeux fermés",
    type: 'dare',
    mode: GameMode.Classic,
    intensity: 'soft',
    shotsCount: 1
  },
  {
    id: 'classic_creative_artistic_2',
    text: "Crée une sculpture avec des objets trouvés dans la pièce",
    type: 'dare',
    mode: GameMode.Classic,
    intensity: 'medium',
    shotsCount: 2
  },
  {
    id: 'classic_creative_artistic_3',
    text: "Fais un dessin collaboratif où chaque joueur ajoute un élément",
    type: 'dare',
    mode: GameMode.Classic,
    intensity: 'medium',
    shotsCount: 2
  },
  {
    id: 'classic_creative_artistic_4',
    text: "Crée une œuvre d'art abstraite en utilisant uniquement des boissons",
    type: 'dare',
    mode: GameMode.Classic,
    intensity: 'spicy',
    shotsCount: 3
  },
  {
    id: 'classic_creative_artistic_5',
    text: "Organise une exposition d'art minute avec des objets du quotidien",
    type: 'dare',
    mode: GameMode.Classic,
    intensity: 'extreme',
    shotsCount: 4
  }
];