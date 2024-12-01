import { Challenge, GameMode } from '../../types/game';

// Helper function to create classic challenges with proper progression
const createClassicChallenge = (
  id: string,
  text: string,
  intensity: 'soft' | 'medium' | 'spicy' | 'extreme',
  type: 'dare' | 'truth' = 'dare',
  shotsCount: number = 1
): Challenge => ({
  id,
  text,
  type,
  mode: GameMode.Classic,
  intensity,
  shotsCount
});

// Soft challenges - Early game (25)
const softChallenges: Challenge[] = [
  createClassicChallenge('classic_soft_1', 'Fais 5 pompes', 'soft'),
  createClassicChallenge('classic_soft_2', 'Imite un animal au choix des autres joueurs', 'soft'),
  createClassicChallenge('classic_soft_3', 'Raconte une blague', 'soft'),
  createClassicChallenge('classic_soft_4', 'Fais le tour de la pièce en dansant', 'soft'),
  createClassicChallenge('classic_soft_5', 'Chante l\'alphabet à l\'envers', 'soft'),
  createClassicChallenge('classic_soft_6', 'Fais une grimace et garde-la pendant 10 secondes', 'soft'),
  createClassicChallenge('classic_soft_7', 'Imite un présentateur météo', 'soft'),
  createClassicChallenge('classic_soft_8', 'Fais semblant d\'être une statue pendant 30 secondes', 'soft'),
  createClassicChallenge('classic_soft_9', 'Parle avec un accent pendant 1 minute', 'soft'),
  createClassicChallenge('classic_soft_10', 'Fais le robot pendant 30 secondes', 'soft'),
  createClassicChallenge('classic_soft_11', 'Raconte une histoire en n\'utilisant que des onomatopées', 'soft'),
  createClassicChallenge('classic_soft_12', 'Fais 10 sauts de grenouille', 'soft'),
  createClassicChallenge('classic_soft_13', 'Imite un personnage de dessin animé', 'soft'),
  createClassicChallenge('classic_soft_14', 'Fais semblant d\'être un zombie', 'soft'),
  createClassicChallenge('classic_soft_15', 'Danse la macarena', 'soft'),
  createClassicChallenge('classic_soft_16', 'Fais le poirier contre un mur pendant 10 secondes', 'soft'),
  createClassicChallenge('classic_soft_17', 'Imite un vendeur téléphonique', 'soft'),
  createClassicChallenge('classic_soft_18', 'Fais une chorégraphie improvisée', 'soft'),
  createClassicChallenge('classic_soft_19', 'Raconte ton pire souvenir d\'enfance', 'soft'),
  createClassicChallenge('classic_soft_20', 'Imite un influenceur qui fait sa promo', 'soft'),
  createClassicChallenge('classic_soft_21', 'Fais le tour de la pièce en moonwalk', 'soft'),
  createClassicChallenge('classic_soft_22', 'Chante une chanson en yaourt', 'soft'),
  createClassicChallenge('classic_soft_23', 'Fais semblant d\'être un commentateur sportif', 'soft'),
  createClassicChallenge('classic_soft_24', 'Imite une pub célèbre', 'soft'),
  createClassicChallenge('classic_soft_25', 'Fais un discours de remerciement comme aux Oscars', 'soft')
];

// Medium challenges - Mid game (25)
const mediumChallenges: Challenge[] = [
  createClassicChallenge('classic_medium_1', 'Fais 15 pompes ou distribue 3 gorgées', 'medium', 'dare', 2),
  createClassicChallenge('classic_medium_2', 'Twerk pendant 20 secondes ou bois 3 gorgées', 'medium', 'dare', 2),
  createClassicChallenge('classic_medium_3', 'Fais le poirier pendant 15 secondes', 'medium', 'dare', 2),
  createClassicChallenge('classic_medium_4', 'Bois un verre sans utiliser tes mains', 'medium', 'dare', 2),
  createClassicChallenge('classic_medium_5', 'Fais 20 squats ou distribue 4 gorgées', 'medium', 'dare', 2),
  createClassicChallenge('classic_medium_6', 'Imite une scène de film célèbre', 'medium', 'dare', 2),
  createClassicChallenge('classic_medium_7', 'Fais un rap improvisé de 30 secondes', 'medium', 'dare', 2),
  createClassicChallenge('classic_medium_8', 'Danse le floss pendant 30 secondes', 'medium', 'dare', 2),
  createClassicChallenge('classic_medium_9', 'Fais 10 burpees', 'medium', 'dare', 2),
  createClassicChallenge('classic_medium_10', 'Imite 3 célébrités différentes', 'medium', 'dare', 2),
  createClassicChallenge('classic_medium_11', 'Fais le tour de la pièce en marchant sur les mains', 'medium', 'dare', 2),
  createClassicChallenge('classic_medium_12', 'Mange un aliment les yeux bandés', 'medium', 'dare', 2),
  createClassicChallenge('classic_medium_13', 'Fais une battle de danse avec un autre joueur', 'medium', 'dare', 2),
  createClassicChallenge('classic_medium_14', 'Imite un combat de kung-fu au ralenti', 'medium', 'dare', 2),
  createClassicChallenge('classic_medium_15', 'Fais le grand écart ou bois 4 gorgées', 'medium', 'dare', 2),
  createClassicChallenge('classic_medium_16', 'Chante une chanson en mode opéra', 'medium', 'dare', 2),
  createClassicChallenge('classic_medium_17', 'Fais 30 jumping jacks', 'medium', 'dare', 2),
  createClassicChallenge('classic_medium_18', 'Imite tous les autres joueurs', 'medium', 'dare', 2),
  createClassicChallenge('classic_medium_19', 'Fais un discours politique improvisé', 'medium', 'dare', 2),
  createClassicChallenge('classic_medium_20', 'Danse comme Michael Jackson', 'medium', 'dare', 2),
  createClassicChallenge('classic_medium_21', 'Fais une démonstration de karaté', 'medium', 'dare', 2),
  createClassicChallenge('classic_medium_22', 'Imite une scène de télé-réalité', 'medium', 'dare', 2),
  createClassicChallenge('classic_medium_23', 'Fais un concours de grimaces avec un autre joueur', 'medium', 'dare', 2),
  createClassicChallenge('classic_medium_24', 'Chante en playback de manière exagérée', 'medium', 'dare', 2),
  createClassicChallenge('classic_medium_25', 'Fais une démonstration de breakdance', 'medium', 'dare', 2)
];

// Spicy challenges - Late game (25)
const spicyChallenges: Challenge[] = [
  createClassicChallenge('classic_spicy_1', 'Fais 25 pompes ou cul sec', 'spicy', 'dare', 3),
  createClassicChallenge('classic_spicy_2', 'Bois un shot sur la tête', 'spicy', 'dare', 3),
  createClassicChallenge('classic_spicy_3', 'Fais 30 burpees ou distribue 6 gorgées', 'spicy', 'dare', 3),
  createClassicChallenge('classic_spicy_4', 'Imite une scène de film d\'horreur', 'spicy', 'dare', 3),
  createClassicChallenge('classic_spicy_5', 'Fais un stand-up comedy de 2 minutes', 'spicy', 'dare', 3),
  createClassicChallenge('classic_spicy_6', 'Bois un cocktail créé par les autres joueurs', 'spicy', 'dare', 3),
  createClassicChallenge('classic_spicy_7', 'Fais 40 squats ou distribue 8 gorgées', 'spicy', 'dare', 3),
  createClassicChallenge('classic_spicy_8', 'Mange un piment ou bois 5 gorgées', 'spicy', 'dare', 3),
  createClassicChallenge('classic_spicy_9', 'Fais une démonstration de pole dance imaginaire', 'spicy', 'dare', 3),
  createClassicChallenge('classic_spicy_10', 'Imite une scène de film romantique exagérée', 'spicy', 'dare', 3),
  createClassicChallenge('classic_spicy_11', 'Fais un lip sync battle', 'spicy', 'dare', 3),
  createClassicChallenge('classic_spicy_12', 'Laisse un autre joueur te maquiller les yeux bandés', 'spicy', 'dare', 3),
  createClassicChallenge('classic_spicy_13', 'Fais un cocktail avec 4 ingrédients au hasard', 'spicy', 'dare', 3),
  createClassicChallenge('classic_spicy_14', 'Imite une scène de drame en playback', 'spicy', 'dare', 3),
  createClassicChallenge('classic_spicy_15', 'Fais un show de talents improvisé', 'spicy', 'dare', 3),
  createClassicChallenge('classic_spicy_16', 'Bois un shot avec un accessoire ridicule', 'spicy', 'dare', 3),
  createClassicChallenge('classic_spicy_17', 'Fais une démonstration de gymnastique', 'spicy', 'dare', 3),
  createClassicChallenge('classic_spicy_18', 'Imite une scène de combat épique', 'spicy', 'dare', 3),
  createClassicChallenge('classic_spicy_19', 'Fais un défilé de mode excentrique', 'spicy', 'dare', 3),
  createClassicChallenge('classic_spicy_20', 'Bois un shot les yeux bandés', 'spicy', 'dare', 3),
  createClassicChallenge('classic_spicy_21', 'Fais une démonstration de catch', 'spicy', 'dare', 3),
  createClassicChallenge('classic_spicy_22', 'Imite une scène de comédie musicale', 'spicy', 'dare', 3),
  createClassicChallenge('classic_spicy_23', 'Fais un concours de danse avec handicap', 'spicy', 'dare', 3),
  createClassicChallenge('classic_spicy_24', 'Bois un shot en faisant le poirier', 'spicy', 'dare', 3),
  createClassicChallenge('classic_spicy_25', 'Fais une démonstration de parkour', 'spicy', 'dare', 3)
];

// Extreme challenges - End game (25)
const extremeChallenges: Challenge[] = [
  createClassicChallenge('classic_extreme_1', 'Fais 50 pompes ou cul sec', 'extreme', 'dare', 4),
  createClassicChallenge('classic_extreme_2', 'Bois un cocktail mystère préparé par les autres', 'extreme', 'dare', 4),
  createClassicChallenge('classic_extreme_3', 'Fais 60 burpees ou distribue 10 gorgées', 'extreme', 'dare', 4),
  createClassicChallenge('classic_extreme_4', 'Imite une scène de cascade', 'extreme', 'dare', 4),
  createClassicChallenge('classic_extreme_5', 'Fais un show complet de 3 minutes', 'extreme', 'dare', 4),
  createClassicChallenge('classic_extreme_6', 'Bois un cocktail épicé', 'extreme', 'dare', 4),
  createClassicChallenge('classic_extreme_7', 'Fais 100 squats ou distribue 12 gorgées', 'extreme', 'dare', 4),
  createClassicChallenge('classic_extreme_8', 'Mange un mélange créé par les autres joueurs', 'extreme', 'dare', 4),
  createClassicChallenge('classic_extreme_9', 'Fais une performance complète', 'extreme', 'dare', 4),
  createClassicChallenge('classic_extreme_10', 'Bois un shot de chaque alcool disponible', 'extreme', 'dare', 4),
  createClassicChallenge('classic_extreme_11', 'Fais une chorégraphie complète', 'extreme', 'dare', 4),
  createClassicChallenge('classic_extreme_12', 'Relève un défi physique extrême', 'extreme', 'dare', 4),
  createClassicChallenge('classic_extreme_13', 'Fais un parcours d\'obstacles improvisé', 'extreme', 'dare', 4),
  createClassicChallenge('classic_extreme_14', 'Bois un cocktail avec 6 ingrédients', 'extreme', 'dare', 4),
  createClassicChallenge('classic_extreme_15', 'Fais une démonstration de talents multiples', 'extreme', 'dare', 4),
  createClassicChallenge('classic_extreme_16', 'Relève un défi impossible', 'extreme', 'dare', 4),
  createClassicChallenge('classic_extreme_17', 'Fais une performance artistique complète', 'extreme', 'dare', 4),
  createClassicChallenge('classic_extreme_18', 'Bois un mélange créé par chaque joueur', 'extreme', 'dare', 4),
  createClassicChallenge('classic_extreme_19', 'Fais un show de talents avec accessoires', 'extreme', 'dare', 4),
  createClassicChallenge('classic_extreme_20', 'Relève le défi ultime', 'extreme', 'dare', 4),
  createClassicChallenge('classic_extreme_21', 'Fais une performance épique', 'extreme', 'dare', 4),
  createClassicChallenge('classic_extreme_22', 'Bois un cocktail extrême', 'extreme', 'dare', 4),
  createClassicChallenge('classic_extreme_23', 'Fais une démonstration de force', 'extreme', 'dare', 4),
  createClassicChallenge('classic_extreme_24', 'Relève un défi physique intense', 'extreme', 'dare', 4),
  createClassicChallenge('classic_extreme_25', 'Fais une performance finale', 'extreme', 'dare', 4)
];

export const classicChallenges: Challenge[] = [
  ...softChallenges,
  ...mediumChallenges,
  ...spicyChallenges,
  ...extremeChallenges
];