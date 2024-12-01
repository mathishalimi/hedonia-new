import { motion } from 'framer-motion';

export default function FloatingParty() {
  const partyItems = ['🎈', '🎉', '🎊', '✨', '🎵'];

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden">
      {partyItems.map((item, index) => (
        <motion.div
          key={index}
          className="absolute text-3xl opacity-10"
          initial={{ scale: 0 }}
          animate={{
            x: [0, (index % 2 === 0 ? 40 : -40), 0],
            y: [0, (index % 3 === 0 ? -20 : 20), 0],
            scale: [1, 1.2, 1],
            rotate: [0, 360, 0],
          }}
          transition={{
            duration: 12 + index * 2,
            repeat: Infinity,
            ease: "linear",
            delay: index * 0.4
          }}
          style={{
            top: `${20 + (index * 18) % 60}%`,
            left: `${15 + (index * 22) % 70}%`,
          }}
        >
          {item}
        </motion.div>
      ))}
    </div>
  );
}