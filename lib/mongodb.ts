// lib/mongodb.ts
import { MongoClient, Db } from "mongodb";

const uri = process.env.MONGODB_URI;

let client: MongoClient;
let cachedDb: Db;

if (!uri) {
  throw new Error(
    "Please define the MONGODB_URI environment variable inside .env.local",
  );
}

export async function connectToDatabase() {
  if (cachedDb) return { client, db: cachedDb };

  if (!client) {
    client = await MongoClient.connect(uri || "");
  }

  const db = client.db(process.env.MONGODB_DB);
  cachedDb = db;

  return { client, db };
}
