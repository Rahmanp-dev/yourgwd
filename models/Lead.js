import mongoose from 'mongoose';

const historySchema = new mongoose.Schema({
  timestamp: { type: Date, default: Date.now },
  action: { type: String, required: true },
  message: { type: String, required: true }
}, { _id: false });

const leadSchema = new mongoose.Schema({
  id: { type: String, required: true, unique: true },
  name: { type: String, required: true },
  niche: { type: String, required: true },
  city: { type: String, required: true },
  phone: { type: String },
  website: { type: String },
  rating: { type: Number },
  reviewsCount: { type: Number },
  score: { type: Number, default: 0 },
  websiteQuality: { type: String },
  status: { type: String, default: 'New' },
  workDate: { type: String, default: '' },
  previewUrl: { type: String },
  whatsappMessage: { type: String },
  history: [historySchema]
}, { timestamps: true });

export default mongoose.models.Lead || mongoose.model('Lead', leadSchema);
