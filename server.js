import express from 'express';
import cors from 'cors';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import mongoose from 'mongoose';
import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';

import Lead from './models/Lead.js';
import User from './models/User.js';

dotenv.config();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const PORT = process.env.PORT || 5000;
const JWT_SECRET = process.env.JWT_SECRET || 'gwd-sales-super-secret-key-change-me-in-prod';

app.use(cors());
app.use(express.json());

// MongoDB Connection
if (process.env.MONGODB_URI) {
  mongoose.connect(process.env.MONGODB_URI)
    .then(() => console.log('Connected to MongoDB Atlas'))
    .catch(err => console.error('MongoDB connection error:', err));
} else {
  console.warn('⚠️ MONGODB_URI is not set in .env! Database features will not work until you configure it.');
}

// Create previews directory if it doesn't exist
const PREVIEWS_DIR = path.join(__dirname, 'previews');
if (!fs.existsSync(PREVIEWS_DIR)) {
  fs.mkdirSync(PREVIEWS_DIR, { recursive: true });
}

// Serve dynamically generated preview sites publicly
app.use('/previews', express.static(PREVIEWS_DIR));

// === AUTHENTICATION API === //

app.post('/api/auth/register', async (req, res) => {
  try {
    const { email, password, name } = req.body;
    const existing = await User.findOne({ email });
    if (existing) return res.status(400).json({ error: 'Email already exists' });
    
    const user = new User({ email, password, name });
    await user.save();
    
    const token = jwt.sign({ id: user._id, email: user.email }, JWT_SECRET, { expiresIn: '7d' });
    res.json({ success: true, token, user: { id: user._id, email, name } });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

app.post('/api/auth/login', async (req, res) => {
  try {
    const { email, password } = req.body;
    
    // Fallback: Check against ENV variables if defined
    if (process.env.ADMIN_EMAIL && process.env.ADMIN_PASSWORD) {
      if (email === process.env.ADMIN_EMAIL && password === process.env.ADMIN_PASSWORD) {
        const token = jwt.sign({ id: 'admin-env', email }, JWT_SECRET, { expiresIn: '7d' });
        return res.json({ success: true, token, user: { id: 'admin-env', email, name: 'Admin Team Member' } });
      }
    }

    if (!process.env.MONGODB_URI) {
      return res.status(401).json({ error: 'Database not connected and invalid credentials.' });
    }

    const user = await User.findOne({ email });
    if (!user) return res.status(401).json({ error: 'Invalid credentials' });
    
    const isMatch = await user.comparePassword(password);
    if (!isMatch) return res.status(401).json({ error: 'Invalid credentials' });
    
    const token = jwt.sign({ id: user._id, email: user.email }, JWT_SECRET, { expiresIn: '7d' });
    res.json({ success: true, token, user: { id: user._id, email, name: user.name } });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Auth Middleware for protected routes
const requireAuth = (req, res, next) => {
  const authHeader = req.headers.authorization;
  if (!authHeader || !authHeader.startsWith('Bearer ')) {
    return res.status(401).json({ error: 'Unauthorized: No token provided' });
  }
  const token = authHeader.split(' ')[1];
  try {
    const decoded = jwt.verify(token, JWT_SECRET);
    req.user = decoded;
    next();
  } catch (err) {
    return res.status(401).json({ error: 'Unauthorized: Invalid token' });
  }
};

// === PROTECTED CRM API === //

// Get all leads
app.get('/api/leads', requireAuth, async (req, res) => {
  try {
    const leads = await Lead.find().sort({ createdAt: -1 });
    res.json(leads);
  } catch (err) {
    res.status(500).json({ error: 'Failed to fetch leads: ' + err.message });
  }
});

// Create or update a lead
app.post('/api/leads', requireAuth, async (req, res) => {
  try {
    const leadData = req.body;
    
    // If updating existing lead
    const existing = await Lead.findOne({ id: leadData.id });
    if (existing) {
      const updated = await Lead.findOneAndUpdate(
        { id: leadData.id },
        { $set: leadData },
        { new: true }
      );
      return res.json({ success: true, lead: updated });
    }
    
    // Create new lead
    const newLead = new Lead(leadData);
    await newLead.save();
    res.json({ success: true, lead: newLead });
  } catch (err) {
    res.status(500).json({ error: 'Failed to save lead: ' + err.message });
  }
});

// Update lead status
app.post('/api/leads/:id/status', requireAuth, async (req, res) => {
  try {
    const { id } = req.params;
    const { status } = req.body;
    
    const lead = await Lead.findOne({ id });
    if (!lead) return res.status(404).json({ error: 'Lead not found' });
    
    lead.status = status;
    lead.history.push({
      action: 'Status Updated',
      message: `Status set to '${status}' by team member.`
    });
    
    await lead.save();
    res.json({ success: true, lead });
  } catch (err) {
    res.status(500).json({ error: 'Failed to update status: ' + err.message });
  }
});

// Save config settings (Local .env fallback for settings panel)
app.post('/api/settings', requireAuth, (req, res) => {
  try {
    const settings = req.body;
    const envPath = path.join(__dirname, '.env');
    let envContent = '';
    
    // Preserve existing env vars
    let existingEnv = {};
    if (fs.existsSync(envPath)) {
      const content = fs.readFileSync(envPath, 'utf-8');
      content.split('\n').forEach(line => {
        const parts = line.split('=');
        if (parts.length >= 2) {
          existingEnv[parts[0].trim()] = parts.slice(1).join('=').trim();
        }
      });
    }
    
    const mergedSettings = { ...existingEnv, ...settings };
    
    for (const [key, value] of Object.entries(mergedSettings)) {
      envContent += `${key}=${value}\n`;
    }
    fs.writeFileSync(envPath, envContent);
    res.json({ success: true, message: 'Settings saved.' });
  } catch (err) {
    res.status(500).json({ error: 'Failed to save settings: ' + err.message });
  }
});

app.get('/api/settings', requireAuth, (req, res) => {
  try {
    const envPath = path.join(__dirname, '.env');
    const settings = {};
    if (fs.existsSync(envPath)) {
      const content = fs.readFileSync(envPath, 'utf-8');
      content.split('\n').forEach(line => {
        const parts = line.split('=');
        if (parts.length >= 2) {
          settings[parts[0].trim()] = parts.slice(1).join('=').trim();
        }
      });
    }
    res.json(settings);
  } catch (err) {
    res.status(500).json({ error: 'Failed to load settings: ' + err.message });
  }
});

app.listen(PORT, () => {
  console.log(`GWD Sales Backend API running on http://localhost:${PORT}`);
});
