import { createClient } from '@supabase/supabase-js';

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseKey = import.meta.env.VITE_SUPABASE_ANON_KEY;

if (!supabaseUrl || !supabaseKey) {
  throw new Error('Missing Supabase environment variables');
}

export const supabase = createClient(supabaseUrl, supabaseKey);

export async function fetchChallenges(mode: string, intensity: string) {
  const { data, error } = await supabase
    .from('challenges')
    .select('*')
    .eq('mode', mode)
    .eq('intensity', intensity);

  if (error) throw error;
  return data;
}

export async function fetchPremiumContent() {
  const { data, error } = await supabase
    .from('premium_content')
    .select('*');

  if (error) throw error;
  return data;
}

export async function createRoom(roomData: any) {
  const { data, error } = await supabase
    .from('rooms')
    .insert([roomData])
    .select()
    .single();

  if (error) throw error;
  return data;
}

export async function joinRoom(roomCode: string, playerData: any) {
  const { data, error } = await supabase
    .from('room_players')
    .insert([{ room_code: roomCode, ...playerData }])
    .select();

  if (error) throw error;
  return data;
}