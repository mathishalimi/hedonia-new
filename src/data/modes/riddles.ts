import { Challenge, GameMode } from '../../types/game';

const createRiddleChallenge = (
  id: string,
  text: string,
  intensity: 'soft' | 'medium' | 'spicy' | 'extreme',
  shotsCount: number = 1
): Challenge => ({
  id,
  text,
  type: 'riddle',
  mode: GameMode.Riddles,
  intensity,
  shotsCount
});

// Helper function to create riddle arrays
const createRiddleSet = (
  baseId: string,
  riddles: [string, string][],
  intensity: 'soft' | 'medium' | 'spicy' | 'extreme',
  shotsCount: number
): Challenge[] => {
  return riddles.map(([question, answer], index) => 
    createRiddleChallenge(
      `${baseId}_${index + 1}`,
      `${question} (${answer})`,
      intensity,
      shotsCount
    )
  );
};

// Early game riddles (125)
const softRiddles = createRiddleSet('riddle_soft', [
  ["Je suis ce que je suis, mais je ne suis pas ce que je suis. Si j'étais ce que je suis, je ne serais pas ce que je suis. Qui suis-je ?", "une ombre"],
  ["Je commence la nuit et je termine le matin. Qui suis-je ?", "la lettre N"],
  ["Plus je suis présent, moins je suis visible. Qui suis-je ?", "l'obscurité"],
  // ... Add 122 more soft riddles
], 'soft', 1);

// Mid game riddles (125)
const mediumRiddles = createRiddleSet('riddle_medium', [
  ["Je suis né grand et je meurs petit. Qui suis-je ?", "un crayon"],
  ["Je peux être lu mais je ne suis pas un livre, je peux parler mais je n'ai pas de bouche. Qui suis-je ?", "une lettre"],
  ["Je suis toujours en retard mais je ne bouge jamais. Qui suis-je ?", "une montre arrêtée"],
  // ... Add 122 more medium riddles
], 'medium', 2);

// Late game riddles (125)
const spicyRiddles = createRiddleSet('riddle_spicy', [
  ["Je suis fait de verre mais je ne suis pas fragile, je grossis tout mais je ne mange rien. Qui suis-je ?", "une loupe"],
  ["Je suis plein de dents mais je ne peux pas mordre. Qui suis-je ?", "un peigne"],
  ["Je suis noir quand tu m'achètes, rouge quand tu m'utilises, et gris quand tu me jettes. Qui suis-je ?", "le charbon"],
  // ... Add 122 more spicy riddles
], 'spicy', 3);

// End game riddles (125)
const extremeRiddles = createRiddleSet('riddle_extreme', [
  ["Je grandis en descendant. Qui suis-je ?", "une racine"],
  ["On me prend pour un repas, je ne mange jamais. Qui suis-je ?", "une assiette"],
  ["J'ai des villes, mais pas de maisons. J'ai des montagnes, mais pas d'arbres. J'ai de l'eau, mais pas de poissons. J'ai des routes, mais pas de voitures. Que suis-je ?", "une carte"],
  // ... Add 122 more extreme riddles
], 'extreme', 4);

export const riddleChallenges: Challenge[] = [
  ...softRiddles,
  ...mediumRiddles,
  ...spicyRiddles,
  ...extremeRiddles
];