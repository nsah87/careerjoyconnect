import { createClient } from '@supabase/supabase-js'

// Ensure these environment variables are set
const supabaseUrl = import.meta.env.VITE_SUPABASE_URL
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY

if (!supabaseUrl || !supabaseAnonKey) {
  throw new Error('Missing Supabase environment variables. Please check your Supabase connection.')
}

export const supabase = createClient(supabaseUrl, supabaseAnonKey)