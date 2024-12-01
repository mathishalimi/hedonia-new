import { motion } from 'framer-motion';
import { useFloatingAnimation, FloatingConfig } from './useFloatingAnimation';

interface Props {
  emoji: string;
  index: number;
  config?: Partial<FloatingConfig>;
  style?: React.CSSProperties;
  className?: string;
}

export default function FloatingEmoji({ 
  emoji, 
  index, 
  config,
  style,
  className = "text-3xl opacity-10"
}: Props) {
  const animation = useFloatingAnimation(index, config);

  return (
    <motion.div
      className={`absolute ${className}`}
      initial={animation.initial}
      animate={animation.animate}
      transition={{
        duration: animation.transition.duration,
        repeat: Infinity,
        ease: "linear",
        delay: index * 0.4
      }}
      style={style}
    >
      {emoji}
    </motion.div>
  );
}