import { motion } from 'framer-motion';

export default function FloatingDrinks() {
  const drinks = ['🍺', '🍻', '🥂', '🍷', '🍸'];

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden">
      {drinks.map((drink, index) => (
        <motion.div
          key={index}
          className="absolute text-3xl opacity-10"
          initial={{ scale: 0 }}
          animate={{
            x: [0, (index % 2 === 0 ? 30 : -30), 0],
            y: [0, (index % 3 === 0 ? -15 : 15), 0],
            scale: [1, 1.1, 1],
            rotate: [0, 180, 0],
          }}
          transition={{
            duration: 10 + index * 2,
            repeat: Infinity,
            ease: "linear",
            delay: index * 0.3
          }}
          style={{
            top: `${15 + (index * 15) % 70}%`,
            left: `${10 + (index * 20) % 80}%`,
          }}
        >
          {drink}
        </motion.div>
      ))}
    </div>
  );
}