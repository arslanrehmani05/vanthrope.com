import { NextRequest, NextResponse } from 'next/server';
import { insertEngagement } from '@/lib/supabase';

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { name, company, revenueRange, problem } = body;

    if (!name || !company || !revenueRange || !problem) {
      return NextResponse.json(
        { success: false, error: 'All fields are required.' },
        { status: 400 }
      );
    }

    // Insert into Supabase (will fallback to mock logging if no credentials)
    const data = await insertEngagement(name, company, revenueRange, problem);

    // Send email notification mock
    console.log(`[EMAIL NOTIFICATION] New engagement submission from ${name} at ${company}.
      Revenue: ${revenueRange}
      Operational Problem: ${problem}
    `);

    return NextResponse.json({ success: true, data });
  } catch (error: any) {
    console.error('Error in /api/contact:', error);
    return NextResponse.json(
      { success: false, error: error.message || 'Internal server error.' },
      { status: 500 }
    );
  }
}
