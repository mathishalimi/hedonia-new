import { Challenge, GameMode } from '../../../../types/game';

export const objectRiddles: Challenge[] = [
  {
    id: 'riddle_objects_1',
    text: "Je suis plein de dents mais je ne peux pas mordre. Qui suis-je ? (un peigne)",
    type: 'riddle',
    mode: GameMode.Riddles,
    intensity: 'soft',
    shotsCount: 1
  },
  {
    id: 'riddle_objects_2',
    text: "J'ai un cœur qui ne bat pas, une tête qui ne pense pas, un lit mais je ne dors pas. Qui suis-je ? (une rivière)",
    type: 'riddle',
    mode: GameMode.Riddles,
    intensity: 'medium',
    shotsCount: 2
  },
  {
    id: 'riddle_objects_3',
    text: "Je suis fait de verre mais je ne suis pas fragile, je grossis tout mais je ne mange rien. Qui suis-je ? (une loupe)",
    type: 'riddle',
    mode: GameMode.Riddles,
    intensity: 'medium',
    shotsCount: 2
  },
  {
    id: 'riddle_objects_4',
    text: "Je peux être lu mais je ne suis pas un livre, je peux parler mais je n'ai pas de bouche. Qui suis-je ? (une lettre)",
    type: 'riddle',
    mode: GameMode.Riddles,
    intensity: 'spicy',
    shotsCount: 3
  },
  {
    id: 'riddle_objects_5',
    text: "Je suis noir quand tu m'achètes, rouge quand tu m'utilises, et gris quand tu me jettes. Qui suis-je ? (le charbon)",
    type: 'riddle',
    mode: GameMode.Riddles,
    intensity: 'extreme',
    shotsCount: 4
  }
];