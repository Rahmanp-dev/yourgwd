import { MongoClient } from 'mongodb';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Ensure your MongoDB URI is set or use the local default if not found
const uri = process.env.MONGODB_URI || "mongodb://localhost:27017";
const client = new MongoClient(uri);

async function run() {
    try {
        await client.connect();
        // The previous script used 'gwd_leads' as the db and 'leads' as the collection.
        const db = client.db('gwd_leads');
        const collection = db.collection('leads');

        const leadsFile = path.join(__dirname, '..', 'scratch', 'cyberabad_boutiques.json');
        if (!fs.existsSync(leadsFile)) {
            console.error(`Leads file not found at ${leadsFile}`);
            return;
        }

        const rawData = fs.readFileSync(leadsFile, 'utf8');
        const leads = JSON.parse(rawData);

        for (const lead of leads) {
            // Create a slug for the preview
            const slug = lead.username.replace(/_/g, '-');
            const previewUrl = `https://yourgwd.vercel.app/client/${slug}`;

            // Generate WhatsApp Message
            const whatsappMessage = `Hi ${lead.name} team, \n\nWe love your recent collections on Instagram! Since you're doing so well through DMs, we went ahead and built a custom high-end Lookbook + Shop preview specifically for your brand. It lets your customers browse your ethnic wear and checkout seamlessly. \n\nYou can view your live preview here: ${previewUrl} \n\nLet us know what you think! We specialize in helping Cyberabad boutiques scale their sales with zero upfront costs.\n\nBest, \nGWD Team`;

            const doc = {
                name: lead.name,
                businessName: lead.name,
                niche: lead.niche,
                location: lead.location,
                whatsappNumber: lead.whatsappNumber,
                instagramUrl: lead.instagramUrl,
                previewUrl: previewUrl,
                slug: slug,
                whatsappMessage: whatsappMessage,
                status: "Generated",
                createdAt: new Date()
            };

            // Upsert based on whatsappNumber
            await collection.updateOne(
                { whatsappNumber: lead.whatsappNumber },
                { $set: doc },
                { upsert: true }
            );

            console.log(`Inserted/Updated: ${lead.name}`);
            console.log(`Preview URL: ${previewUrl}`);
            console.log(`Message: \n${whatsappMessage}\n-------------------`);
        }

        console.log(`Successfully processed ${leads.length} leads into MongoDB.`);
    } catch (e) {
        console.error("Error connecting to MongoDB:", e);
    } finally {
        await client.close();
    }
}

run().catch(console.error);
