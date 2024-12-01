import { useState } from 'react';
import { motion } from 'framer-motion';
import { initiateCheckout } from '../services/stripe';

export default function PremiumButton() {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleClick = async () => {
    if (isLoading) return;
    
    try {
      setIsLoading(true);
      setError(null);
      await initiateCheckout();
    } catch (err) {
      const errorMessage = err instanceof Error ? err.message : 'Payment initialization failed';
      setError(errorMessage);
      console.error('Payment error:', errorMessage);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="space-y-2">
      <motion.button
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        onClick={handleClick}
        disabled={isLoading}
        className="w-full bg-gradient-to-r from-[var(--primary)] to-[var(--secondary)] text-white py-4 rounded-xl font-semibold hover:opacity-90 transition transform disabled:opacity-50"
      >
        {isLoading ? (
          <div className="flex items-center justify-center">
            <div className="animate-spin h-5 w-5 border-2 border-white border-t-transparent rounded-full mr-2" />
            Redirection vers le paiement...
          </div>
        ) : (
          'Débloquer maintenant pour 4.99€'
        )}
      </motion.button>
      
      {error && (
        <motion.p 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="text-[var(--primary)] text-sm text-center"
        >
          {error}
        </motion.p>
      )}

      <p className="text-white/60 text-xs text-center">
        Paiement sécurisé par Stripe • Test: 4242 4242 4242 4242
      </p>
    </div>
  );
}