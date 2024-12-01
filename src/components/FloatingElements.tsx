import { motion } from 'framer-motion';

export default function FloatingElements() {
  const emojis = ['🍺', '🍻', '🥂', '🍷', '🍸'];

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden">
      {/* Large floating emojis */}
      {emojis.map((emoji, index) => (
        <motion.div
          key={index}
          className="absolute text-4xl md:text-5xl opacity-10"
          initial={{ scale: 0 }}
          animate={{
            x: [0, (index % 2 === 0 ? 50 : -50), 0],
            y: [0, (index % 3 === 0 ? -25 : 25), 0],
            scale: [1, 1.2, 1],
            rotate: [0, 360, 0],
          }}
          transition={{
            duration: 15 + index * 2,
            repeat: Infinity,
            ease: "linear",
            delay: index * 0.5
          }}
          style={{
            top: `${10 + (index * 20) % 80}%`,
            left: `${5 + (index * 25) % 90}%`,
          }}
        >
          {emoji}
        </motion.div>
      ))}

      {/* Gradient overlays for depth */}
      <div className="absolute inset-0 bg-gradient-to-t from-[var(--background)] via-transparent to-transparent opacity-50" />
      <div className="absolute inset-0 bg-gradient-to-b from-[var(--background)] via-transparent to-transparent opacity-50" />
    </div>
  );
}