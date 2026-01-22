import type { SupabaseClient } from "@supabase/supabase-js";
import type { Database } from "@/integrations/supabase/types";

/**
 * Avoid importing the auto-generated Supabase client at module-load time.
 * If env vars are missing in a given build/runtime, the import will throw;
 * we catch it and let the app continue instead of blank-screening.
 */
export async function getSupabaseClient(): Promise<SupabaseClient<Database> | null> {
  try {
    const mod = await import("@/integrations/supabase/client");
    return mod.supabase;
  } catch (err) {
    console.error("Failed to load backend client (missing env?):", err);
    return null;
  }
}
