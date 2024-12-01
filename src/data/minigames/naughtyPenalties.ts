import { GameMode } from '../../types/game';

export interface MiniGamePenalty {
  text: string;
  intensity: 'soft' | 'medium' | 'spicy' | 'extreme';
  mode: GameMode;
  shotsCount: number;
}

// Penalties for each mini-game in naughty mode
export const naughtyMinigamePenalties = {
  armWrestling: [
    { text: "Fais un massage des bras au gagnant", intensity: 'soft', mode: GameMode.Naughty, shotsCount: 1 },
    { text: "Fais un slow sensuel avec le gagnant", intensity: 'medium', mode: GameMode.Naughty, shotsCount: 2 },
    { text: "Donne un massage très sensuel au gagnant", intensity: 'spicy', mode: GameMode.Naughty, shotsCount: 3 },
    { text: "Fais un lap dance pour le gagnant", intensity: 'extreme', mode: GameMode.Naughty, shotsCount: 4 }
  ],

  diceChallenge: [
    { text: "Susurre un compliment à l'oreille du gagnant", intensity: 'soft', mode: GameMode.Naughty, shotsCount: 1 },
    { text: "Fais un massage des épaules au gagnant", intensity: 'medium', mode: GameMode.Naughty, shotsCount: 2 },
    { text: "Danse de manière sensuelle pour le gagnant", intensity: 'spicy', mode: GameMode.Naughty, shotsCount: 3 },
    { text: "Fais un strip-tease pour le gagnant (garde tes sous-vêtements)", intensity: 'extreme', mode: GameMode.Naughty, shotsCount: 4 }
  ],

  ticTacToe: [
    { text: "Fais un câlin sensuel au gagnant", intensity: 'soft', mode: GameMode.Naughty, shotsCount: 1 },
    { text: "Masse sensuellement les mains du gagnant", intensity: 'medium', mode: GameMode.Naughty, shotsCount: 2 },
    { text: "Embrasse la partie du corps du gagnant de ton choix", intensity: 'spicy', mode: GameMode.Naughty, shotsCount: 3 },
    { text: "Fais un body shot sur le gagnant", intensity: 'extreme', mode: GameMode.Naughty, shotsCount: 4 }
  ],

  countdown: [
    { text: "Fais un compliment très sensuel au gagnant", intensity: 'soft', mode: GameMode.Naughty, shotsCount: 1 },
    { text: "Danse collé-serré avec le gagnant", intensity: 'medium', mode: GameMode.Naughty, shotsCount: 2 },
    { text: "Fais un massage très hot au gagnant", intensity: 'spicy', mode: GameMode.Naughty, shotsCount: 3 },
    { text: "Mime ta position préférée avec le gagnant", intensity: 'extreme', mode: GameMode.Naughty, shotsCount: 4 }
  ]
};

export function getNaughtyPenalty(miniGame: string, progress: number): MiniGamePenalty {
  const penalties = naughtyMinigamePenalties[miniGame as keyof typeof naughtyMinigamePenalties] || [];
  const index = Math.min(Math.floor(progress * penalties.length), penalties.length - 1);
  return penalties[index];
}