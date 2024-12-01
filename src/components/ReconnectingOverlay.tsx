import { motion } from 'framer-motion';

export default function ReconnectingOverlay() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="fixed inset-0 bg-black/50 flex items-center justify-center z-50"
    >
      <div className="glass-card rounded-xl p-6 text-center">
        <div className="animate-spin h-8 w-8 border-2 border-white border-t-transparent rounded-full mx-auto mb-4" />
        <p className="text-white">Reconnexion en cours...</p>
      </div>
    </motion.div>
  );
}