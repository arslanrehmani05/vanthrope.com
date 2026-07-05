import { createClient } from '@supabase/supabase-js';

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || '';
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || '';

// Create a client that will fail gracefully if keys are placeholders or empty
export const supabase = supabaseUrl && supabaseAnonKey && supabaseUrl !== 'placeholder-url' && supabaseAnonKey !== 'placeholder-key'
  ? createClient(supabaseUrl, supabaseAnonKey)
  : null;

export async function insertEngagement(name: string, company: string, revenueRange: string, problem: string) {
  if (supabase) {
    const { data, error } = await supabase
      .from('engagements')
      .insert([{
        name,
        company,
        revenue_range: revenueRange,
        problem,
        created_at: new Date().toISOString()
      }])
      .select();
    if (error) throw error;
    return data;
  } else {
    console.log(`[MOCK SUPABASE] Saved Engagement:
      Name: ${name}
      Company: ${company}
      Revenue Range: ${revenueRange}
      Operational Problem: ${problem}
    `);
    return [{ id: 'mock-uuid', name, company, revenue_range: revenueRange, problem, created_at: new Date().toISOString() }];
  }
}
