import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';

export default function PremiumCancel() {
  const navigate = useNavigate();

  return (
    <div className="fixed inset-0 bg-[var(--background)] flex items-center justify-center p-4">
      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        className="glass-card rounded-xl p-8 max-w-md w-full text-center"
      >
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="text-6xl mb-6"
        >
          😢
        </motion.div>
        
        <h1 className="text-3xl font-bold text-white mb-4">
          Paiement Annulé
        </h1>
        
        <p className="text-white/80 mb-8">
          Le paiement a été annulé. Vous pouvez réessayer quand vous voulez !
        </p>

        <button
          onClick={() => navigate('/game')}
          className="w-full bg-[var(--primary)] text-white py-3 rounded-lg hover:opacity-90 transition"
        >
          Retourner au jeu
        </button>
      </motion.div>
    </div>
  );
}