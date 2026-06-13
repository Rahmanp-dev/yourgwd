import { NextResponse } from 'next/server';
import connectToDatabase from '@/lib/db';
import Settings from '@/models/Settings';
import { verifyAuth } from '@/lib/auth';

export async function GET(request) {
  try {
    await connectToDatabase();
    let settings = await Settings.findOne({ id: 'global' });
    if (!settings) {
      settings = new Settings({ id: 'global' });
      await settings.save();
    }
    return NextResponse.json(settings);
  } catch (err) {
    return NextResponse.json({ error: 'Failed to fetch settings: ' + err.message }, { status: 500 });
  }
}

export async function POST(request) {
  const auth = verifyAuth(request);
  if (auth.error) return NextResponse.json({ error: auth.error }, { status: auth.status });

  try {
    const data = await request.json();
    await connectToDatabase();
    
    const settings = await Settings.findOneAndUpdate(
      { id: 'global' },
      { $set: data },
      { new: true, upsert: true }
    );
    
    return NextResponse.json({ success: true, settings });
  } catch (err) {
    return NextResponse.json({ error: 'Failed to save settings: ' + err.message }, { status: 500 });
  }
}
