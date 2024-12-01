import { Howl } from 'howler';

const sounds = {
  swipe: new Howl({ src: ['/sounds/swipe.mp3'] }),
  success: new Howl({ src: ['/sounds/success.mp3'] }),
  fail: new Howl({ src: ['/sounds/fail.mp3'] }),
  click: new Howl({ src: ['/sounds/click.mp3'] }),
  countdown: new Howl({ src: ['/sounds/countdown.mp3'] }),
  win: new Howl({ src: ['/sounds/win.mp3'] }),
  lose: new Howl({ src: ['/sounds/lose.mp3'] }),
  roll: new Howl({ src: ['/sounds/dice-roll.mp3'] })
};

export function useSoundEffects() {
  const play = (sound: keyof typeof sounds) => {
    sounds[sound].play();
  };

  return { play };
}