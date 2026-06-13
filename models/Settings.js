import mongoose from 'mongoose';

const SettingsSchema = new mongoose.Schema({
  id: { type: String, default: 'global' },
  TARGET_NICHE: String,
  TARGET_CITY: String,
  DAILY_LEAD_LIMIT: String,
  COMPANY_NAME: String,
  AGENT_PERSONA_NAME: String,
  FIREBASE_DOMAIN: String,
  USER_WHATSAPP_NUMBER: String,
  GOOGLE_SHEET_ID: String,
  GOOGLE_PLACES_API_KEY: String,
  WHATSAPP_TOKEN: String,
  WHATSAPP_PHONE_NUMBER_ID: String,
  FIREBASE_PROJECT_ID: String,
  GOOGLE_CALENDAR_ID: String,
  GEMINI_API_KEY: String
}, { timestamps: true });

export default mongoose.models.Settings || mongoose.model('Settings', SettingsSchema);
