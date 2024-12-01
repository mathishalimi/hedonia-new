import { createClient } from '@supabase/supabase-js';

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseKey = import.meta.env.VITE_SUPABASE_ANON_KEY;

if (!supabaseUrl || !supabaseKey) {
  throw new Error('Missing Supabase environment variables');
}

export const supabase = createClient(supabaseUrl, supabaseKey);

export const tables = {
  challenges: 'challenges',
  users: 'users',
  rooms: 'rooms',
  room_players: 'room_players',
  premium_content: 'premium_content',
  purchases: 'purchases'
} as const;