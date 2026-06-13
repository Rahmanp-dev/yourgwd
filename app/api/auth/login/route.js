import { NextResponse } from 'next/server';
import jwt from 'jsonwebtoken';
import connectToDatabase from '@/lib/db';
import User from '@/models/User';

const JWT_SECRET = process.env.JWT_SECRET || 'gwd-sales-super-secret-key-change-me-in-prod';

export async function POST(request) {
  try {
    const { email, password } = await request.json();
    
    // Fallback: Check against ENV variables
    if (process.env.ADMIN_EMAIL && process.env.ADMIN_PASSWORD) {
      if (email === process.env.ADMIN_EMAIL && password === process.env.ADMIN_PASSWORD) {
        const token = jwt.sign({ id: 'admin-env', email }, JWT_SECRET, { expiresIn: '7d' });
        return NextResponse.json({ success: true, token, user: { id: 'admin-env', email, name: 'Admin Team Member' } });
      }
    }

    try {
      await connectToDatabase();
    } catch (e) {
      return NextResponse.json({ error: 'Database not connected and invalid credentials.' }, { status: 401 });
    }
    
    const user = await User.findOne({ email });
    if (!user) return NextResponse.json({ error: 'Invalid credentials' }, { status: 401 });
    
    const isMatch = await user.comparePassword(password);
    if (!isMatch) return NextResponse.json({ error: 'Invalid credentials' }, { status: 401 });
    
    const token = jwt.sign({ id: user._id, email: user.email }, JWT_SECRET, { expiresIn: '7d' });
    return NextResponse.json({ success: true, token, user: { id: user._id, email, name: user.name } });
  } catch (err) {
    return NextResponse.json({ error: err.message }, { status: 500 });
  }
}
