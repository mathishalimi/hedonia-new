import { Challenge } from '../types/game';

export function getNaughtyModePenalty(progress: number): string[] {
  const penalties = [
    // Early game penalties (0-25%)
    [
      'Fais un massage sensuel de 30 secondes au gagnant',
      'Susurre quelque chose de coquin à l\'oreille du gagnant',
      'Fais un slow sensuel avec le gagnant'
    ],
    // Mid game penalties (25-50%)
    [
      'Danse de manière très sensuelle pour le gagnant',
      'Fais un massage très hot au gagnant',
      'Embrasse le gagnant où il le souhaite'
    ],
    // Late game penalties (50-75%)
    [
      'Fais un lap dance de 30 secondes pour le gagnant',
      'Fais un body shot sur le gagnant',
      'Mime ta position préférée avec le gagnant'
    ],
    // End game penalties (75-100%)
    [
      'Fais un strip-tease de 30 secondes pour le gagnant',
      'Fais tout ce que le gagnant te demande pendant 1 minute',
      'Donne un massage très très hot au gagnant'
    ]
  ];

  const index = Math.min(Math.floor(progress * penalties.length), penalties.length - 1);
  return penalties[index];
}

export function adjustNaughtyShotsCount(challenge: Challenge, progress: number): number {
  // Base shots from challenge
  let shots = challenge.shotsCount || 1;
  
  // Increase shots based on progress
  if (progress > 0.75) {
    shots += 3; // End game: +3 shots
  } else if (progress > 0.5) {
    shots += 2; // Late game: +2 shots
  } else if (progress > 0.25) {
    shots += 1; // Mid game: +1 shot
  }

  return shots;
}