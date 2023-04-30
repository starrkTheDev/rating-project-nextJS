import { MongoClient } from "mongodb";

async function handler(req, res) {
  if (req.method === 'POST') {
    const data = req.body;

    const client = await MongoClient.connect('mongodb+srv://krystiankaczorek1:sl4b33lo@cluster0.4yy9hyb.mongodb.net/games?retryWrites=true&w=majority')

    const db = client.db();
    const gamesCollection = db.collection('games');
    const result = await gamesCollection.insertOne(data);
    client.close();
    res.status(201).json({ message: 'Game inserted' })
  }
}

export default handler;
