import dotenv from 'dotenv';
import { createClient } from '@supabase/supabase-js';

dotenv.config();
const supabaseUrl = 'https://iiyjiikbtsckevydbcsj.supabase.co';
const supabaseKey = process.env.VITE_PUBLIC_SUPABASE_KEY;
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
