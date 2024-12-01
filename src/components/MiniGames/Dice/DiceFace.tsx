import { motion } from 'framer-motion';

interface DiceDot {
  x: number;
  y: number;
}

interface Props {
  dots: DiceDot[];
}

export default function DiceFace({ dots }: Props) {
  return (
    <div className="relative w-full h-full bg-white rounded-2xl shadow-inner border-4 border-white/50">
      {dots.map((dot, index) => (
        <motion.div
          key={index}
          className="absolute w-4 h-4 bg-black rounded-full transform -translate-x-1/2 -translate-y-1/2"
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          style={{ left: `${dot.x}%`, top: `${dot.y}%` }}
        />
      ))}
    </div>
  );
}