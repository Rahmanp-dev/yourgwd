import { NextResponse } from 'next/server';
import jwt from 'jsonwebtoken';
import connectToDatabase from '@/lib/db';
import User from '@/models/User';

const JWT_SECRET = process.env.JWT_SECRET || 'gwd-sales-super-secret-key-change-me-in-prod';

export async function POST(request) {
  try {
    const { email, password, name } = await request.json();
    await connectToDatabase();
    
    const existing = await User.findOne({ email });
    if (existing) return NextResponse.json({ error: 'Email already exists' }, { status: 400 });
    
    const user = new User({ email, password, name });
    await user.save();
    
    const token = jwt.sign({ id: user._id, email: user.email }, JWT_SECRET, { expiresIn: '7d' });
    return NextResponse.json({ success: true, token, user: { id: user._id, email, name } });
  } catch (err) {
    return NextResponse.json({ error: err.message }, { status: 500 });
  }
}
