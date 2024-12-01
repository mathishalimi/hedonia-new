import { Challenge, GameMode } from '../../../../types/game';

export const truthChallenges: Challenge[] = [
  {
    id: 'naughty_truth_1',
    text: "Raconte ton fantasme le plus fou",
    type: 'truth',
    mode: GameMode.Naughty,
    intensity: 'spicy',
    shotsCount: 3
  },
  {
    id: 'naughty_truth_2',
    text: "Quelle est la chose la plus coquine que tu aies faite en public ?",
    type: 'truth',
    mode: GameMode.Naughty,
    intensity: 'spicy',
    shotsCount: 3
  },
  {
    id: 'naughty_truth_3',
    text: "Décris ton plus grand turn-on",
    type: 'truth',
    mode: GameMode.Naughty,
    intensity: 'medium',
    shotsCount: 2
  },
  {
    id: 'naughty_truth_4',
    text: "Raconte ton rêve érotique le plus mémorable",
    type: 'truth',
    mode: GameMode.Naughty,
    intensity: 'spicy',
    shotsCount: 3
  },
  {
    id: 'naughty_truth_5',
    text: "Quel est ton plus grand kink ?",
    type: 'truth',
    mode: GameMode.Naughty,
    intensity: 'extreme',
    shotsCount: 4
  }
];