import { MongoClient } from "mongodb";

async function handler(req, res) {
    if (req.method === 'POST') {
        const data = req.body;

        const client = await MongoClient.connect('mongodb+srv://krystiankaczorek1:sl4b33lo@cluster0.4yy9hyb.mongodb.net/achievements?retryWrites=true&w=majority')

        const db = client.db();
        const achievementsCollection = db.collection('achievements');
        const result = await achievementsCollection.insertOne(data);
        client.close();
        res.status(201).json({ message: 'Achievement inserted' })
    }
}

export default handler;
