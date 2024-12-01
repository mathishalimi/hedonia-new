import { Challenge, GameMode } from '../../types/game';

// Helper function to create naughty challenges with proper progression
const createNaughtyChallenge = (
  id: string,
  text: string,
  intensity: 'soft' | 'medium' | 'spicy' | 'extreme',
  type: 'dare' | 'truth' = 'dare',
  shotsCount: number = 1
): Challenge => ({
  id,
  text,
  type,
  mode: GameMode.Naughty,
  intensity,
  shotsCount
});

// Soft challenges - Early game (25)
const softChallenges: Challenge[] = [
  // Original soft challenges
  createNaughtyChallenge('naughty_soft_1', 'Fais un compliment séduisant à un autre joueur', 'soft'),
  createNaughtyChallenge('naughty_soft_2', 'Fais un câlin de 10 secondes à un joueur de ton choix', 'soft'),
  createNaughtyChallenge('naughty_soft_3', 'Susurre quelque chose de gentil à l\'oreille d\'un autre joueur', 'soft'),
  createNaughtyChallenge('naughty_soft_4', 'Fais un massage des mains de 30 secondes', 'soft'),
  createNaughtyChallenge('naughty_soft_5', 'Décris ce qui te séduit chez quelqu\'un', 'soft', 'truth'),
  createNaughtyChallenge('naughty_soft_6', 'Raconte ton premier baiser', 'soft', 'truth'),
  createNaughtyChallenge('naughty_soft_7', 'Fais un slow romantique', 'soft'),
  createNaughtyChallenge('naughty_soft_8', 'Imite une pub de parfum de manière sensuelle', 'soft'),
  // Additional soft challenges
  createNaughtyChallenge('naughty_soft_9', 'Fais un clin d\'œil séducteur à chaque joueur', 'soft'),
  createNaughtyChallenge('naughty_soft_10', 'Donne un surnom romantique à chaque joueur', 'soft'),
  createNaughtyChallenge('naughty_soft_11', 'Raconte ta plus belle histoire d\'amour', 'soft', 'truth'),
  createNaughtyChallenge('naughty_soft_12', 'Fais un massage du cou de 20 secondes', 'soft'),
  createNaughtyChallenge('naughty_soft_13', 'Décris ton rendez-vous parfait', 'soft', 'truth'),
  createNaughtyChallenge('naughty_soft_14', 'Fais une déclaration d\'amour à un objet', 'soft'),
  createNaughtyChallenge('naughty_soft_15', 'Danse un slow avec un objet', 'soft'),
  createNaughtyChallenge('naughty_soft_16', 'Raconte ta technique de drague préférée', 'soft', 'truth'),
  createNaughtyChallenge('naughty_soft_17', 'Fais un poème romantique improvisé', 'soft'),
  createNaughtyChallenge('naughty_soft_18', 'Mime une scène romantique de film', 'soft'),
  createNaughtyChallenge('naughty_soft_19', 'Décris ton type idéal', 'soft', 'truth'),
  createNaughtyChallenge('naughty_soft_20', 'Fais un massage des épaules de 20 secondes', 'soft'),
  createNaughtyChallenge('naughty_soft_21', 'Raconte ton pire date', 'soft', 'truth'),
  createNaughtyChallenge('naughty_soft_22', 'Fais une sérénade improvisée', 'soft'),
  createNaughtyChallenge('naughty_soft_23', 'Donne trois qualités séduisantes de chaque joueur', 'soft'),
  createNaughtyChallenge('naughty_soft_24', 'Mime une demande en mariage', 'soft'),
  createNaughtyChallenge('naughty_soft_25', 'Raconte ton coup de foudre le plus mémorable', 'soft', 'truth')
];

// Medium challenges - Mid game (25)
const mediumChallenges: Challenge[] = [
  // Original medium challenges
  createNaughtyChallenge('naughty_medium_1', 'Fais un massage des épaules sensuel pendant 30 secondes', 'medium', 'dare', 2),
  createNaughtyChallenge('naughty_medium_2', 'Danse de manière sensuelle pendant 30 secondes', 'medium', 'dare', 2),
  createNaughtyChallenge('naughty_medium_3', 'Décris ton fantasme le plus soft', 'medium', 'truth', 2),
  createNaughtyChallenge('naughty_medium_4', 'Raconte ton rêve le plus érotique', 'medium', 'truth', 2),
  createNaughtyChallenge('naughty_medium_5', 'Fais un suçon sur le bras d\'un autre joueur', 'medium', 'dare', 2),
  createNaughtyChallenge('naughty_medium_6', 'Embrasse le cou d\'un autre joueur', 'medium', 'dare', 2),
  createNaughtyChallenge('naughty_medium_7', 'Décris ton plus grand turn-on', 'medium', 'truth', 2),
  createNaughtyChallenge('naughty_medium_8', 'Mime une scène sensuelle avec un objet', 'medium', 'dare', 2),
  // Additional medium challenges
  createNaughtyChallenge('naughty_medium_9', 'Fais un strip-tease avec un vêtement', 'medium', 'dare', 2),
  createNaughtyChallenge('naughty_medium_10', 'Susurre quelque chose de coquin à l\'oreille de chaque joueur', 'medium', 'dare', 2),
  createNaughtyChallenge('naughty_medium_11', 'Raconte ta plus belle expérience sensuelle', 'medium', 'truth', 2),
  createNaughtyChallenge('naughty_medium_12', 'Fais un massage du dos de 30 secondes', 'medium', 'dare', 2),
  createNaughtyChallenge('naughty_medium_13', 'Décris ce qui te fait craquer chez quelqu\'un', 'medium', 'truth', 2),
  createNaughtyChallenge('naughty_medium_14', 'Danse un slow très proche avec le joueur de ton choix', 'medium', 'dare', 2),
  createNaughtyChallenge('naughty_medium_15', 'Fais un massage des jambes de 30 secondes', 'medium', 'dare', 2),
  createNaughtyChallenge('naughty_medium_16', 'Raconte ton plus beau baiser', 'medium', 'truth', 2),
  createNaughtyChallenge('naughty_medium_17', 'Mime une scène de séduction', 'medium', 'dare', 2),
  createNaughtyChallenge('naughty_medium_18', 'Décris ton endroit préféré pour un moment intime', 'medium', 'truth', 2),
  createNaughtyChallenge('naughty_medium_19', 'Fais un massage sensuel des mains pendant 1 minute', 'medium', 'dare', 2),
  createNaughtyChallenge('naughty_medium_20', 'Raconte ton plus grand désir du moment', 'medium', 'truth', 2),
  createNaughtyChallenge('naughty_medium_21', 'Fais un câlin très sensuel au joueur de ton choix', 'medium', 'dare', 2),
  createNaughtyChallenge('naughty_medium_22', 'Décris ta tenue la plus sexy', 'medium', 'truth', 2),
  createNaughtyChallenge('naughty_medium_23', 'Fais un massage du cou très sensuel', 'medium', 'dare', 2),
  createNaughtyChallenge('naughty_medium_24', 'Raconte ton fantasme le plus récent', 'medium', 'truth', 2),
  createNaughtyChallenge('naughty_medium_25', 'Danse de manière séduisante sur une musique au choix', 'medium', 'dare', 2)
];

// Spicy challenges - Late game (25)
const spicyChallenges: Challenge[] = [
  // Original spicy challenges
  createNaughtyChallenge('naughty_spicy_1', 'Fais un lap dance de 30 secondes', 'spicy', 'dare', 3),
  createNaughtyChallenge('naughty_spicy_2', 'Enlève un vêtement au choix', 'spicy', 'dare', 3),
  createNaughtyChallenge('naughty_spicy_3', 'Raconte ta position préférée', 'spicy', 'truth', 3),
  createNaughtyChallenge('naughty_spicy_4', 'Décris ton plus grand fantasme', 'spicy', 'truth', 3),
  createNaughtyChallenge('naughty_spicy_5', 'Fais un massage très sensuel au joueur de ton choix', 'spicy', 'dare', 3),
  createNaughtyChallenge('naughty_spicy_6', 'Mime ton meilleur orgasme', 'spicy', 'dare', 3),
  createNaughtyChallenge('naughty_spicy_7', 'Raconte ta plus belle expérience intime', 'spicy', 'truth', 3),
  createNaughtyChallenge('naughty_spicy_8', 'Embrasse la partie du corps de ton choix d\'un autre joueur', 'spicy', 'dare', 3),
  // Additional spicy challenges
  createNaughtyChallenge('naughty_spicy_9', 'Fais un strip-tease sensuel (garde tes sous-vêtements)', 'spicy', 'dare', 3),
  createNaughtyChallenge('naughty_spicy_10', 'Décris en détail ton fantasme le plus fou', 'spicy', 'truth', 3),
  createNaughtyChallenge('naughty_spicy_11', 'Fais un body shot sur le joueur de ton choix', 'spicy', 'dare', 3),
  createNaughtyChallenge('naughty_spicy_12', 'Raconte ton expérience la plus hot', 'spicy', 'truth', 3),
  createNaughtyChallenge('naughty_spicy_13', 'Fais un massage très hot au joueur de ton choix', 'spicy', 'dare', 3),
  createNaughtyChallenge('naughty_spicy_14', 'Décris ton plus grand turn-on en détail', 'spicy', 'truth', 3),
  createNaughtyChallenge('naughty_spicy_15', 'Mime ta position préférée', 'spicy', 'dare', 3),
  createNaughtyChallenge('naughty_spicy_16', 'Raconte ton fantasme le plus inavouable', 'spicy', 'truth', 3),
  createNaughtyChallenge('naughty_spicy_17', 'Fais un massage très sensuel des jambes', 'spicy', 'dare', 3),
  createNaughtyChallenge('naughty_spicy_18', 'Décris ton plus grand kink', 'spicy', 'truth', 3),
  createNaughtyChallenge('naughty_spicy_19', 'Danse de manière très suggestive', 'spicy', 'dare', 3),
  createNaughtyChallenge('naughty_spicy_20', 'Raconte ton expérience la plus torride', 'spicy', 'truth', 3),
  createNaughtyChallenge('naughty_spicy_21', 'Fais un strip-tease sur les genoux d\'un joueur', 'spicy', 'dare', 3),
  createNaughtyChallenge('naughty_spicy_22', 'Décris ton plus grand désir sexuel', 'spicy', 'truth', 3),
  createNaughtyChallenge('naughty_spicy_23', 'Fais un massage très sensuel du dos', 'spicy', 'dare', 3),
  createNaughtyChallenge('naughty_spicy_24', 'Raconte ton fantasme le plus sauvage', 'spicy', 'truth', 3),
  createNaughtyChallenge('naughty_spicy_25', 'Mime une scène très hot avec le joueur de ton choix', 'spicy', 'dare', 3)
];

// Extreme challenges - End game (25)
const extremeChallenges: Challenge[] = [
  // Original extreme challenges
  createNaughtyChallenge('naughty_extreme_1', 'Fais un strip-tease de 1 minute (garde tes sous-vêtements)', 'extreme', 'dare', 4),
  createNaughtyChallenge('naughty_extreme_2', 'Décris en détail ton plus grand fantasme avec quelqu\'un dans la pièce', 'extreme', 'truth', 4),
  createNaughtyChallenge('naughty_extreme_3', 'Embrasse langoureusement le joueur de ton choix', 'extreme', 'dare', 4),
  createNaughtyChallenge('naughty_extreme_4', 'Fais un body shot sur le joueur de ton choix', 'extreme', 'dare', 4),
  createNaughtyChallenge('naughty_extreme_5', 'Raconte ton fantasme le plus inavouable', 'extreme', 'truth', 4),
  createNaughtyChallenge('naughty_extreme_6', 'Mime ta position préférée avec le joueur de ton choix', 'extreme', 'dare', 4),
  createNaughtyChallenge('naughty_extreme_7', 'Fais un massage très hot au joueur de ton choix', 'extreme', 'dare', 4),
  createNaughtyChallenge('naughty_extreme_8', 'Décris ce qui t\'excite le plus chez un autre joueur', 'extreme', 'truth', 4),
  // Additional extreme challenges
  createNaughtyChallenge('naughty_extreme_9', 'Fais un lap dance très hot sur le joueur de ton choix', 'extreme', 'dare', 4),
  createNaughtyChallenge('naughty_extreme_10', 'Raconte ton fantasme le plus torride avec quelqu\'un présent', 'extreme', 'truth', 4),
  createNaughtyChallenge('naughty_extreme_11', 'Fais un strip-tease complet (garde tes sous-vêtements)', 'extreme', 'dare', 4),
  createNaughtyChallenge('naughty_extreme_12', 'Décris en détail ce que tu ferais au joueur de ton choix', 'extreme', 'truth', 4),
  createNaughtyChallenge('naughty_extreme_13', 'Fais un massage ultra sensuel au joueur de ton choix', 'extreme', 'dare', 4),
  createNaughtyChallenge('naughty_extreme_14', 'Raconte ton plus grand désir avec quelqu\'un présent', 'extreme', 'truth', 4),
  createNaughtyChallenge('naughty_extreme_15', 'Mime une scène très hot avec le joueur de ton choix', 'extreme', 'dare', 4),
  createNaughtyChallenge('naughty_extreme_16', 'Décris ton plus grand fantasme avec deux joueurs présents', 'extreme', 'truth', 4),
  createNaughtyChallenge('naughty_extreme_17', 'Fais un body shot très sensuel sur le joueur de ton choix', 'extreme', 'dare', 4),
  createNaughtyChallenge('naughty_extreme_18', 'Raconte ton expérience la plus torride en détail', 'extreme', 'truth', 4),
  createNaughtyChallenge('naughty_extreme_19', 'Fais un strip-tease très hot (garde tes sous-vêtements)', 'extreme', 'dare', 4),
  createNaughtyChallenge('naughty_extreme_20', 'Décris ton plus grand kink avec quelqu\'un présent', 'extreme', 'truth', 4),
  createNaughtyChallenge('naughty_extreme_21', 'Fais un lap dance ultra sensuel', 'extreme', 'dare', 4),
  createNaughtyChallenge('naughty_extreme_22', 'Raconte ton fantasme le plus fou avec quelqu\'un présent', 'extreme', 'truth', 4),
  createNaughtyChallenge('naughty_extreme_23', 'Fais un massage érotique au joueur de ton choix', 'extreme', 'dare', 4),
  createNaughtyChallenge('naughty_extreme_24', 'Décris ta plus grande envie avec quelqu\'un présent', 'extreme', 'truth', 4),
  createNaughtyChallenge('naughty_extreme_25', 'Mime une scène très torride avec le joueur de ton choix', 'extreme', 'dare', 4)
];

export const naughtyChallenges: Challenge[] = [
  ...softChallenges,
  ...mediumChallenges,
  ...spicyChallenges,
  ...extremeChallenges
];