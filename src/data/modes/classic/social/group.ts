import { Challenge, GameMode } from '../../../../types/game';

export const groupClassicChallenges: Challenge[] = [
  {
    id: 'classic_social_group_1',
    text: "Organisez une chorale improvisée où chaque joueur chante une partie différente",
    type: 'dare',
    mode: GameMode.Classic,
    intensity: 'medium',
    shotsCount: 2
  },
  {
    id: 'classic_social_group_2',
    text: "Créez une machine humaine où chaque joueur est une partie qui fait un mouvement et un son",
    type: 'dare',
    mode: GameMode.Classic,
    intensity: 'spicy',
    shotsCount: 3
  },
  {
    id: 'classic_social_group_3',
    text: "Faites un défilé de mode où chaque joueur présente un autre joueur",
    type: 'dare',
    mode: GameMode.Classic,
    intensity: 'medium',
    shotsCount: 2
  },
  {
    id: 'classic_social_group_4',
    text: "Créez et performez une courte pièce de théâtre en 2 minutes",
    type: 'dare',
    mode: GameMode.Classic,
    intensity: 'spicy',
    shotsCount: 3
  },
  {
    id: 'classic_social_group_5',
    text: "Organisez un tribunal où chaque joueur a un rôle (juge, avocat, accusé, témoins)",
    type: 'dare',
    mode: GameMode.Classic,
    intensity: 'extreme',
    shotsCount: 4
  }
];