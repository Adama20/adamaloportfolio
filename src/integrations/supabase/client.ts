
import { createClient } from '@supabase/supabase-js';
import type { Database } from './types';

const SUPABASE_URL = "https://kykurxqtkcxotzjtggsx.supabase.co";
const SUPABASE_PUBLISHABLE_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imt5a3VyeHF0a2N4b3R6anRnZ3N4Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDE3MzE1ODQsImV4cCI6MjA1NzMwNzU4NH0.cXoLduLQX-890U8diP8AMq3AOESqfgg12_mfX2yg1HI";

// Import the supabase client like this:
// import { supabase } from "@/integrations/supabase/client";

export const supabase = createClient<Database>(SUPABASE_URL, SUPABASE_PUBLISHABLE_KEY);
