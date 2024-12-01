import { motion } from 'framer-motion';
import { useFloatingAnimation, FloatingConfig } from './useFloatingAnimation';

interface Props {
  emoji: string;
  index: number;
  config?: Partial<FloatingConfig>;
  style?: React.CSSProperties;
  className?: string;
}

export default function FloatingElement({ 
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
      {...animation}
      style={{
        top: `${15 + (index * 15) % 70}%`,
        left: `${10 + (index * 20) % 80}%`,
        ...style
      }}
    >
      {emoji}
    </motion.div>
  );
}