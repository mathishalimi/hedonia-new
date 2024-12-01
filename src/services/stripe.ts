import { loadStripe } from '@stripe/stripe-js';
import api from './api';

const stripePromise = loadStripe(import.meta.env.VITE_STRIPE_PUBLIC_KEY);

export async function initiateCheckout() {
  try {
    const { data: { sessionId } } = await api.post('/premium/create-checkout');
    const stripe = await stripePromise;
    
    if (!stripe) {
      throw new Error('Stripe failed to load');
    }

    const { error } = await stripe.redirectToCheckout({ sessionId });
    if (error) {
      throw error;
    }
  } catch (error) {
    console.error('Payment error:', error);
    throw error;
  }
}

export async function verifyPurchase(sessionId: string) {
  try {
    const { data } = await api.post('/premium/verify', { sessionId });
    return data;
  } catch (error) {
    console.error('Verification error:', error);
    throw error;
  }
}

export async function getPremiumStatus() {
  try {
    const { data } = await api.get('/premium/status');
    return data.isPremium;
  } catch (error) {
    console.error('Premium status error:', error);
    return false;
  }
}