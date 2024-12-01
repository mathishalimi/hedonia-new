import { Challenge, GameMode } from '../../../types/game';

export const socialChallenges: Challenge[] = [
  // Défis Sociaux Légers (0-25%)
  {
    id: 'social_soft_1',
    text: "Fais un compliment sincère à chaque joueur",
    type: 'dare',
    mode: GameMode.Classic,
    intensity: 'soft',
    shotsCount: 1
  },
  {
    id: 'social_soft_2',
    text: "Raconte ton meilleur souvenir avec l'un des joueurs présents",
    type: 'dare',
    mode: GameMode.Classic,
    intensity: 'soft',
    shotsCount: 1
  },
  {
    id: 'social_soft_3',
    text: "Imite un autre joueur pendant 30 secondes",
    type: 'dare',
    mode: GameMode.Classic,
    intensity: 'soft',
    shotsCount: 1
  },
  // Défis Sociaux Moyens (25-50%)
  {
    id: 'social_medium_1',
    text: "Organise un mini talk-show où tu interviewes deux autres joueurs",
    type: 'dare',
    mode: GameMode.Classic,
    intensity: 'medium',
    shotsCount: 2
  },
  {
    id: 'social_medium_2',
    text: "Fais un speed dating de 30 secondes avec chaque joueur",
    type: 'dare',
    mode: GameMode.Classic,
    intensity: 'medium',
    shotsCount: 2
  },
  {
    id: 'social_medium_3',
    text: "Crée une histoire collaborative où chaque joueur ajoute une phrase",
    type: 'dare',
    mode: GameMode.Classic,
    intensity: 'medium',
    shotsCount: 2
  },
  // Défis Sociaux Épicés (50-75%)
  {
    id: 'social_spicy_1',
    text: "Organise un tribunal où tu accuses chaque joueur d'un crime imaginaire",
    type: 'dare',
    mode: GameMode.Classic,
    intensity: 'spicy',
    shotsCount: 3
  },
  {
    id: 'social_spicy_2',
    text: "Fais un roast gentil de chaque joueur",
    type: 'dare',
    mode: GameMode.Classic,
    intensity: 'spicy',
    shotsCount: 3
  },
  {
    id: 'social_spicy_3',
    text: "Crée une théorie du complot impliquant tous les joueurs présents",
    type: 'dare',
    mode: GameMode.Classic,
    intensity: 'spicy',
    shotsCount: 3
  },
  // Défis Sociaux Extrêmes (75-100%)
  {
    id: 'social_extreme_1',
    text: "Organise une cérémonie de remise des prix avec une catégorie pour chaque joueur",
    type: 'dare',
    mode: GameMode.Classic,
    intensity: 'extreme',
    shotsCount: 4
  },
  {
    id: 'social_extreme_2',
    text: "Monte une pièce de théâtre improvisée où chaque joueur joue un autre joueur",
    type: 'dare',
    mode: GameMode.Classic,
    intensity: 'extreme',
    shotsCount: 4
  },
  {
    id: 'social_extreme_3',
    text: "Organise un débat présidentiel où chaque joueur défend une cause absurde",
    type: 'dare',
    mode: GameMode.Classic,
    intensity: 'extreme',
    shotsCount: 4
  }
];