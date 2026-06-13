import { NextResponse } from 'next/server';
import connectToDatabase from '@/lib/db';
import Lead from '@/models/Lead';
import { verifyAuth } from '@/lib/auth';

export async function GET(request) {
  const auth = verifyAuth(request);
  if (auth.error) return NextResponse.json({ error: auth.error }, { status: auth.status });

  try {
    await connectToDatabase();
    const leads = await Lead.find().sort({ createdAt: -1 });
    return NextResponse.json(leads);
  } catch (err) {
    return NextResponse.json({ error: 'Failed to fetch leads: ' + err.message }, { status: 500 });
  }
}

export async function POST(request) {
  const auth = verifyAuth(request);
  if (auth.error) return NextResponse.json({ error: auth.error }, { status: auth.status });

  try {
    const leadData = await request.json();
    await connectToDatabase();
    
    // If updating existing lead
    const existing = await Lead.findOne({ id: leadData.id });
    if (existing) {
      const updated = await Lead.findOneAndUpdate(
        { id: leadData.id },
        { $set: leadData },
        { new: true }
      );
      return NextResponse.json({ success: true, lead: updated });
    }
    
    // Create new lead
    const newLead = new Lead(leadData);
    await newLead.save();
    return NextResponse.json({ success: true, lead: newLead });
  } catch (err) {
    return NextResponse.json({ error: 'Failed to save lead: ' + err.message }, { status: 500 });
  }
}
