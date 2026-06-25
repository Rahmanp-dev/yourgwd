import { MongoClient } from 'mongodb';
import dotenv from 'dotenv';
dotenv.config();

const uri = process.env.MONGODB_URI || "mongodb://localhost:27017";

async function run() {
  const client = new MongoClient(uri);
  try {
    await client.connect();
    console.log("Connected to MongoDB Atlas.");

    const targetDbs = ['test', 'yourgwd', 'gwd_portal'];

    for (const dbName of targetDbs) {
      console.log(`\n--- Database: ${dbName} ---`);
      const db = client.db(dbName);
      const collections = await db.listCollections().toArray();
      for (const col of collections) {
        const count = await db.collection(col.name).countDocuments();
        console.log(` - Collection: ${col.name} | Documents: ${count}`);
        if (count > 0) {
          const sample = await db.collection(col.name).findOne({});
          console.log(`   Sample keys: ${Object.keys(sample).join(', ')}`);
        }
      }
    }
  } catch (err) {
    console.error("Error:", err.message);
  } finally {
    await client.close();
  }
}

run().catch(console.error);
