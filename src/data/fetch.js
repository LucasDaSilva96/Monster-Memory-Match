import { createClient } from "@supabase/supabase-js";
export const supabaseUrl = "https://euliynrsxaoilifmbxag.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImV1bGl5bnJzeGFvaWxpZm1ieGFnIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDI0NjI4MjUsImV4cCI6MjAxODAzODgyNX0.3XkyjlVWNAks6on24CGt_stmhQoYPiIFwS4p9EapgOc";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
