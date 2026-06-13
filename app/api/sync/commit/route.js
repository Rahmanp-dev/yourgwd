import { NextResponse } from 'next/server';
import connectToDatabase from '@/lib/db';
import Lead from '@/models/Lead';
import { verifyAuth } from '@/lib/auth';

export async function POST(request) {
  const auth = verifyAuth(request);
  if (auth.error) return NextResponse.json({ error: auth.error }, { status: auth.status });

  try {
    const { leads } = await request.json();
    if (!Array.isArray(leads)) {
      return NextResponse.json({ error: 'Payload must contain a "leads" array.' }, { status: 400 });
    }

    await connectToDatabase();
    
    let imported = 0;
    let updated = 0;

    for (const leadData of leads) {
      // Ensure it has an ID
      if (!leadData.id) {
        leadData.id = 'L' + Math.random().toString(36).substring(2, 9).toUpperCase();
      }

      // Add audit history for the sync
      const syncHistory = {
        action: 'Imported by Antigravity',
        message: 'Lead synchronized from Antigravity background task.'
      };

      if (!leadData.history) {
        leadData.history = [syncHistory];
      } else {
        leadData.history.push(syncHistory);
      }

      const existing = await Lead.findOne({ id: leadData.id });
      if (existing) {
        await Lead.findOneAndUpdate({ id: leadData.id }, { $set: leadData });
        updated++;
      } else {
        const newLead = new Lead(leadData);
        await newLead.save();
        imported++;
      }
    }
    
    return NextResponse.json({ success: true, imported, updated });
  } catch (err) {
    return NextResponse.json({ error: 'Failed to commit sync: ' + err.message }, { status: 500 });
  }
}
