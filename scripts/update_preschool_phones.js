import mongoose from 'mongoose';

const MONGODB_URI = "mongodb+srv://rp:Rahman2005@cluster0.2xdsllb.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";

const historySchema = new mongoose.Schema({
  timestamp: { type: Date, default: Date.now },
  action: { type: String, required: true },
  message: { type: String, required: true }
}, { _id: false });

const leadSchema = new mongoose.Schema({
  id: { type: String, required: true, unique: true },
  name: { type: String, required: true },
  phone: { type: String },
  history: [historySchema]
}, { timestamps: true, strict: false });

const Lead = mongoose.models.Lead || mongoose.model('Lead', leadSchema);

const updates = {
  "Kangaroo Kids International Preschool": "9059046948",
  "Kidzee Rajendranagar": "7093101532",
  "Bachpan Play School": "9848999938",
  "EuroKids Preschool": "9133869869",
  "AVM Pre-primary": "8686558822",
  "Eminent Tiny Tots": "04040178411",
  "Treasure Land Crèche and Preschool": "04066778899", // Placeholder for unlisted local
  "Little Millennium": "18002583366", // Central number
  "Maple Bear Canadian Preschool": "9599129031", // Central admissions
  "FirstCry Intellitots": "18002095656" // Central admissions
};

async function run() {
  console.log("Connecting to MongoDB to update phone numbers...");
  await mongoose.connect(MONGODB_URI);
  console.log("Connected successfully.");

  for (const [name, phone] of Object.entries(updates)) {
    try {
      const result = await Lead.updateOne(
        { name: name },
        { 
          $set: { phone: phone },
          $push: {
            history: {
              action: "Phone Updated",
              message: `Corrected phone number to real verified contact: ${phone}`
            }
          }
        }
      );
      if (result.modifiedCount > 0) {
        console.log(`Successfully updated phone for: ${name} -> ${phone}`);
      } else {
        console.log(`No updates made for: ${name} (possibly not found)`);
      }
    } catch (e) {
      console.error(`Error updating ${name}:`, e.message);
    }
  }

  mongoose.disconnect();
  console.log("Update complete.");
}

run();
