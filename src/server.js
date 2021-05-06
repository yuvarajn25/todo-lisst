import { createClient } from "@supabase/supabase-js";

console.log({
  SUPERBASE_API_URL: process.env.REACT_APP_SUPERBASE_API_URL,
  REACT_APP_NOT_SECRET_CODE: process.env.REACT_APP_SUPERBASE_SECERT_KEY,
});
const supabase = createClient(
  process.env.REACT_APP_SUPERBASE_API_URL,
  process.env.REACT_APP_SUPERBASE_SECERT_KEY
);

export default supabase;
