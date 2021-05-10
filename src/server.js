import { createClient } from "@supabase/supabase-js";

const supabase = createClient(
  process.env.REACT_APP_SUPERBASE_API_URL,
  process.env.REACT_APP_SUPERBASE_SECERT_KEY
);

export default supabase;
