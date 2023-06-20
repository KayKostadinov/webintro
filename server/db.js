import { MongoClient } from "mongodb";

const mongoUrl = 'mongodb://localhost:27017';
const dbName = 'jokesdb';

let db = null;
let jokesCollection = null;

async function connect() {
  if (db && db.serverConfig.isConnected()) {
    // If the connection already exists, reuse it
    return db;
  }

  try {
    const client = await MongoClient.connect(mongoUrl, {
      useUnifiedTopology: true,
    });
    db = client.db(dbName);
    jokesCollection = db.collection('jokes');
    console.log('Connected to the database');
    return db;
  } catch (err) {
    console.error('Failed to connect to the database:', err);
    process.exit(1);
  }
}

function getJokesCollection() {
  return jokesCollection;
}

module.exports = {
  connect,
  getUsersCollection,
};