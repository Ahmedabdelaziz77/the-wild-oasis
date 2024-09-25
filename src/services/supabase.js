import { createClient } from "@supabase/supabase-js";
export const supabaseUrl = "https://mcncmjhcbalkwbvgamya.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im1jbmNtamhjYmFsa3didmdhbXlhIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MjM0NzExNzQsImV4cCI6MjAzOTA0NzE3NH0.5uQitFVsS1LIaamWIz0bNlYqCXKa-9boFV-YsRa5xcM";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
