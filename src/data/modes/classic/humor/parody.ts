import { Challenge, GameMode } from '../../../../types/game';

export const parodyClassicChallenges: Challenge[] = [
  {
    id: 'classic_humor_parody_1',
    text: "Parodie une pub célèbre avec les moyens du bord",
    type: 'dare',
    mode: GameMode.Classic,
    intensity: 'medium',
    shotsCount: 2
  },
  {
    id: 'classic_humor_parody_2',
    text: "Refais une scène culte de film de manière comique",
    type: 'dare',
    mode: GameMode.Classic,
    intensity: 'spicy',
    shotsCount: 3
  },
  {
    id: 'classic_humor_parody_3',
    text: "Imite un youtubeur célèbre de manière exagérée",
    type: 'dare',
    mode: GameMode.Classic,
    intensity: 'medium',
    shotsCount: 2
  },
  {
    id: 'classic_humor_parody_4',
    text: "Parodie une émission de télé-réalité avec les autres joueurs",
    type: 'dare',
    mode: GameMode.Classic,
    intensity: 'spicy',
    shotsCount: 3
  },
  {
    id: 'classic_humor_parody_5',
    text: "Fais une version parodique d'un clip musical connu",
    type: 'dare',
    mode: GameMode.Classic,
    intensity: 'extreme',
    shotsCount: 4
  }
];