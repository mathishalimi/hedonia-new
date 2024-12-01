import { Challenge, GameMode } from '../../../../types/game';

export const roleplayClassicChallenges: Challenge[] = [
  {
    id: 'classic_social_roleplay_1',
    text: "Échange ton rôle social avec un autre joueur pendant 3 tours",
    type: 'dare',
    mode: GameMode.Classic,
    intensity: 'medium',
    shotsCount: 2
  },
  {
    id: 'classic_social_roleplay_2',
    text: "Joue le rôle d'un vendeur et essaie de vendre un objet absurde à un autre joueur",
    type: 'dare',
    mode: GameMode.Classic,
    intensity: 'medium',
    shotsCount: 2
  },
  {
    id: 'classic_social_roleplay_3',
    text: "Fais semblant d'être un guide touristique et présente la pièce de manière extraordinaire",
    type: 'dare',
    mode: GameMode.Classic,
    intensity: 'spicy',
    shotsCount: 3
  },
  {
    id: 'classic_social_roleplay_4',
    text: "Deviens un commentateur sportif et commente les actions des autres joueurs pendant 2 minutes",
    type: 'dare',
    mode: GameMode.Classic,
    intensity: 'spicy',
    shotsCount: 3
  },
  {
    id: 'classic_social_roleplay_5',
    text: "Organise une cérémonie de remise des prix avec une catégorie pour chaque joueur",
    type: 'dare',
    mode: GameMode.Classic,
    intensity: 'extreme',
    shotsCount: 4
  }
];