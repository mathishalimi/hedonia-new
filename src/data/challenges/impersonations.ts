import { Challenge, GameMode } from '../../types/game';

export const impersonationChallenges: Challenge[] = [
  // Soft (0-25%)
  {
    id: 'impersonation_soft_1',
    text: "Imite 3 YouTubers célèbres en reproduisant leurs phrases fétiches",
    type: 'dare',
    mode: GameMode.Classic,
    intensity: 'soft',
    shotsCount: 1
  },
  {
    id: 'impersonation_soft_2',
    text: "Fais un JT complet en imitant Jean-Pierre Pernaut parlant de traditions françaises",
    type: 'dare',
    mode: GameMode.Classic,
    intensity: 'soft',
    shotsCount: 1
  },
  // Medium (25-50%)
  {
    id: 'impersonation_medium_1',
    text: "Rejoue une scène culte de film en incarnant tous les personnages (Star Wars, Titanic, Le Parrain...)",
    type: 'dare',
    mode: GameMode.Classic,
    intensity: 'medium',
    shotsCount: 2
  },
  {
    id: 'impersonation_medium_2',
    text: "Fais un discours à la Napoléon pour convaincre les autres joueurs de conquérir la cuisine",
    type: 'dare',
    mode: GameMode.Classic,
    intensity: 'medium',
    shotsCount: 2
  },
  // Spicy (50-75%)
  {
    id: 'impersonation_spicy_1',
    text: "Incarne un personnage historique (Cléopâtre, Louis XIV, etc.) confronté à la technologie moderne",
    type: 'dare',
    mode: GameMode.Classic,
    intensity: 'spicy',
    shotsCount: 3
  },
  {
    id: 'impersonation_spicy_2',
    text: "Fais une revue de mode à la Karl Lagerfeld en critiquant la tenue de chaque joueur",
    type: 'dare',
    mode: GameMode.Classic,
    intensity: 'spicy',
    shotsCount: 3
  },
  // Extreme (75-100%)
  {
    id: 'impersonation_extreme_1',
    text: "Improvise une pièce de théâtre de 3 minutes en jouant 5 personnages différents",
    type: 'dare',
    mode: GameMode.Classic,
    intensity: 'extreme',
    shotsCount: 4
  },
  {
    id: 'impersonation_extreme_2',
    text: "Fais un one-man-show de 5 minutes en imitant tes comédiens préférés",
    type: 'dare',
    mode: GameMode.Classic,
    intensity: 'extreme',
    shotsCount: 4
  }
];