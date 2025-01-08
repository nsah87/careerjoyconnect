import { createClient } from '@supabase/supabase-js'

// Ensure these environment variables are set
const supabaseUrl = import.meta.env.VITE_SUPABASE_URL
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY

if (!supabaseUrl || !supabaseAnonKey) {
  throw new Error('Missing Supabase environment variables. Please check your Supabase connection and ensure VITE_SUPABASE_URL and VITE_SUPABASE_ANON_KEY are set in your environment variables.')
}

export const supabase = createClient(supabaseUrl, supabaseAnonKey)