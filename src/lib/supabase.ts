import { createClient } from "@supabase/supabase-js";

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY;

if (!supabaseUrl || !supabaseAnonKey) {
  throw new Error("Missing Supabase environment variables");
}

export const supabase = createClient(supabaseUrl, supabaseAnonKey);

// Types for our database
export interface Business {
  id: string;
  email: string;
  company_name: string;
  short_description: string;
  category: string;
  phone: string;
  website?: string;
  address: string;
  opening_hours: string;
  closing_hours: string;
  services?: string[];
  facade_image_url?: string;
  coordinates?: string;
  status: "pending" | "approved" | "rejected";
  created_at: string;
  updated_at: string;
}

export interface BusinessInsert {
  email: string;
  company_name: string;
  short_description: string;
  category: string;
  phone: string;
  website?: string;
  address: string;
  opening_hours: string;
  closing_hours: string;
  services?: string[];
  facade_image_url?: string;
  coordinates?: string;
}
