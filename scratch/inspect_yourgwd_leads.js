import { MongoClient } from 'mongodb';
import dotenv from 'dotenv';
dotenv.config();

const uri = process.env.MONGODB_URI || "mongodb://localhost:27017";

async function run() {
  const client = new MongoClient(uri);
  try {
    await client.connect();
    const db = client.db('yourgwd');
    const leads = await db.collection('leads').find({}).toArray();
    console.log("yourgwd.leads documents:");
    console.log(JSON.stringify(leads, null, 2));
  } catch (err) {
    console.error("Error:", err.message);
  } finally {
    await client.close();
  }
}

run().catch(console.error);
