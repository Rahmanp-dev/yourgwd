import { NextResponse } from 'next/server';
import connectToDatabase from '@/lib/db';
import Lead from '@/models/Lead';
import { verifyAuth } from '@/lib/auth';

export async function POST(request, { params }) {
  const auth = verifyAuth(request);
  if (auth.error) return NextResponse.json({ error: auth.error }, { status: auth.status });

  try {
    const { id } = params;
    const { status } = await request.json();
    
    await connectToDatabase();
    
    const lead = await Lead.findOne({ id });
    if (!lead) return NextResponse.json({ error: 'Lead not found' }, { status: 404 });
    
    lead.status = status;
    lead.history.push({
      action: 'Status Updated',
      message: `Status set to '${status}' by team member.`
    });
    
    await lead.save();
    return NextResponse.json({ success: true, lead });
  } catch (err) {
    return NextResponse.json({ error: 'Failed to update status: ' + err.message }, { status: 500 });
  }
}
