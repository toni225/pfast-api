import {createClient} from "@supabase/supabase-js";
import {SUPABASE_KEY, SUPABASE_URL} from "./constants";
const url = "https://evrqsaavaohqlopnfgtq.supabase.co"
const key = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImV2cnFzYWF2YW9ocWxvcG5mZ3RxIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDE2ODc2MjMsImV4cCI6MjAxNzI2MzYyM30.t0kKJVnJkPVDYGlSnef_PYdAQ7Hu_z2RyaAuvD0-J3E"

export const supabase = createClient(url, key)