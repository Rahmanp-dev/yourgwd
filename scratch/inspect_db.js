import { MongoClient } from 'mongodb';
import dotenv from 'dotenv';
dotenv.config();

const uri = process.env.MONGODB_URI || "mongodb://localhost:27017";

async function run() {
  const client = new MongoClient(uri);
  try {
    await client.connect();
    console.log("Connected to MongoDB Atlas.");

    // List databases
    const adminDb = client.db().admin();
    const dbs = await adminDb.listDatabases();
    console.log("\nDatabases:");
    dbs.databases.forEach(db => console.log(` - ${db.name}`));

    // Inspect gwd_leads database
    const db = client.db('gwd_leads');
    const collections = await db.listCollections().toArray();
    console.log("\nCollections in 'gwd_leads':");
    collections.forEach(col => console.log(` - ${col.name}`));

    // Check count in leads collection
    const leadsCollection = db.collection('leads');
    const count = await leadsCollection.countDocuments();
    console.log(`\nLeads count in 'gwd_leads.leads': ${count}`);

    // Print a few sample leads
    if (count > 0) {
      const sampleLeads = await leadsCollection.find({}).limit(5).toArray();
      console.log("\nSample Leads:");
      console.log(JSON.stringify(sampleLeads, null, 2));
    }
  } catch (err) {
    console.error("Error:", err.message);
  } finally {
    await client.close();
  }
}

run().catch(console.error);
