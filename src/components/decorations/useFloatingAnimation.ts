import { useMemo } from 'react';

export interface FloatingConfig {
  xRange: number;
  yRange: number;
  duration: number;
  rotationRange: number;
}

export function useFloatingAnimation(index: number, config: Partial<FloatingConfig> = {}) {
  const {
    xRange = 30,
    yRange = 15,
    duration = 10,
    rotationRange = 180,
  } = config;

  return useMemo(() => ({
    initial: { 
      scale: 0,
      x: 0,
      y: 0,
      rotate: 0
    },
    animate: {
      scale: [1, 1.1, 1],
      x: [0, (index % 2 === 0 ? xRange : -xRange), 0],
      y: [0, (index % 3 === 0 ? -yRange : yRange), 0],
      rotate: [0, rotationRange, 0],
    },
    transition: {
      duration,
      repeat: Infinity,
      ease: "linear"
    }
  }), [index, xRange, yRange, duration, rotationRange]);
}