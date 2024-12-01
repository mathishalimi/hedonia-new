import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useGameStore } from '../store/gameStore';
import Confetti from '../components/Confetti';

export default function PremiumSuccess() {
  const navigate = useNavigate();
  const { setPremium } = useGameStore();

  useEffect(() => {
    setPremium(true);
    const timer = setTimeout(() => {
      navigate('/game');
    }, 5000);
    return () => clearTimeout(timer);
  }, [navigate, setPremium]);

  return (
    <div className="fixed inset-0 bg-[var(--background)] flex items-center justify-center p-4">
      <Confetti />
      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        className="glass-card rounded-xl p-8 max-w-md w-full text-center relative z-10"
      >
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="text-6xl mb-6"
        >
          🎉
        </motion.div>
        
        <h1 className="text-3xl font-bold text-white mb-4">
          Premium Débloqué !
        </h1>
        
        <p className="text-white/80 mb-8">
          Merci pour votre achat ! Vous avez maintenant accès à toutes les fonctionnalités premium.
        </p>

        <div className="space-y-4">
          <p className="text-white/60">
            Redirection automatique vers le jeu...
          </p>
          <button
            onClick={() => navigate('/game')}
            className="w-full bg-[var(--primary)] text-white py-3 rounded-lg hover:opacity-90 transition"
          >
            Retourner au jeu maintenant
          </button>
        </div>
      </motion.div>
    </div>
  );
}