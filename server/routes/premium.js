import express from 'express';
import Stripe from 'stripe';
import { supabase } from '../db/supabase.js';
import { authenticateUser } from '../middleware/auth.js';

const router = express.Router();
const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);

router.post('/create-checkout', authenticateUser, async (req, res) => {
  try {
    const session = await stripe.checkout.sessions.create({
      payment_method_types: ['card'],
      line_items: [
        {
          price_data: {
            currency: 'eur',
            product_data: {
              name: 'Premium Membership',
              description: 'Accès à tout le contenu premium'
            },
            unit_amount: 499, // 4.99€
          },
          quantity: 1,
        },
      ],
      mode: 'payment',
      success_url: `${process.env.CLIENT_URL}/premium-success?session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: `${process.env.CLIENT_URL}/premium-cancel`,
      customer_email: req.user.email,
      metadata: {
        userId: req.user.id
      }
    });

    res.json({ sessionId: session.id });
  } catch (error) {
    console.error('Stripe error:', error);
    res.status(500).json({ error: 'Payment initialization failed' });
  }
});

router.post('/verify', authenticateUser, async (req, res) => {
  try {
    const { sessionId } = req.body;
    const session = await stripe.checkout.sessions.retrieve(sessionId);

    if (session.payment_status === 'paid') {
      // Update user's premium status
      const { error } = await supabase
        .from('users')
        .update({ is_premium: true })
        .eq('id', req.user.id);

      if (error) throw error;

      // Record the purchase
      await supabase
        .from('purchases')
        .insert({
          user_id: req.user.id,
          stripe_session_id: sessionId,
          status: 'completed',
          amount: session.amount_total
        });

      res.json({ success: true });
    } else {
      res.status(400).json({ error: 'Payment not completed' });
    }
  } catch (error) {
    console.error('Verification error:', error);
    res.status(500).json({ error: 'Verification failed' });
  }
});

router.get('/content', authenticateUser, async (req, res) => {
  try {
    const { data, error } = await supabase
      .from('premium_content')
      .select('*')
      .eq('type', req.query.type);

    if (error) throw error;
    res.json(data);
  } catch (error) {
    console.error('Content fetch error:', error);
    res.status(500).json({ error: 'Failed to fetch premium content' });
  }
});

export default router;