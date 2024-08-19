import { createClient } from "@supabase/supabase-js";

// Create access to database, first is URL - second is KEY
export const supabase = createClient(
    process.env.SUPABASE_URL,
    process.env.SUPABASE_KEY
);
