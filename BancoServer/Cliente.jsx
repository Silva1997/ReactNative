
import { createClient } from "@supabase/supabase-js";
const supabaseUrl = 'https://llzfydminzoftemzwjle.supabase.co'
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImxsemZ5ZG1pbnpvZnRlbXp3amxlIiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTcxNDcxMjI5NCwiZXhwIjoyMDMwMjg4Mjk0fQ.xYaG2aBFCgCTyB7H6aMr2eQ-yJA0JG243b0EEQduzKE'
 export const supabase = createClient(supabaseUrl, supabaseKey);