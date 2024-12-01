export function getClassicPenalty(progress: number): string {
  const penalties = [
    // Early game penalties (0-25%)
    [
      'Fais 10 pompes',
      'Danse la macarena',
      'Imite un animal de ton choix',
      'Fais le tour de la pièce en dansant',
      'Chante une chanson en yaourt'
    ],
    // Mid game penalties (25-50%)
    [
      'Fais 15 squats',
      'Chante une chanson debout sur une chaise',
      'Raconte une blague nulle',
      'Fais le moonwalk',
      'Imite une pub célèbre'
    ],
    // Late game penalties (50-75%)
    [
      'Fais 20 jumping jacks',
      'Imite une star de cinéma',
      'Fais un discours d\'une minute sur un sujet random',
      'Danse comme Michael Jackson',
      'Fais un rap improvisé'
    ],
    // End game penalties (75-100%)
    [
      'Fais 25 burpees',
      'Fais un show complet de 2 minutes',
      'Imite tous les autres joueurs',
      'Fais une chorégraphie improvisée',
      'Fais un stand-up comedy'
    ]
  ];

  // Ensure progress is between 0 and 1
  const safeProgress = Math.max(0, Math.min(1, progress));
  
  // Calculate index based on progress
  const index = Math.min(Math.floor(safeProgress * penalties.length), penalties.length - 1);
  
  // Get the penalty set for current progress
  const penaltySet = penalties[index];
  
  // Return a random penalty from the set
  return penaltySet[Math.floor(Math.random() * penaltySet.length)];
}