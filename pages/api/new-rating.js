// import { MongoClient } from "mongodb";

// async function handler(req, res) {
//     if (req.method === 'POST') {
//         const data = req.body;
//         const game_id = data.id;
//         const rating = parseInt(data.rating);

//         const client = await MongoClient.connect('mongodb+srv://krystiankaczorek1:sl4b33lo@cluster0.4yy9hyb.mongodb.net/ratings?retryWrites=true&w=majority')

//         const db = client.db();
//         const ratingsCollection = db.collection('ratings');
//         const existingDoc = await ratingsCollection.findOne({ game_id: game_id });
//         const newDoc = { game_id: game_id, ratings: [rating] };

//         if (existingDoc) {
//             const updatedRatings = [...existingDoc.ratings, rating];
//             await ratingsCollection.updateOne({ game_id: game_id }, { $set: { ratings: updatedRatings } });
//             client.close();
//             res.status(201).json({ message: 'Rating updated' });
//         } else {
//             await ratingsCollection.insertOne(newDoc);
//             client.close();
//             res.status(201).json({ message: 'Rating inserted' });
//         }
//     }
// }

// export default handler;


import { MongoClient } from "mongodb";
async function handler(req, res) {
    if (req.method === 'POST') {
        const data = req.body;
        const game_id = data.id;
        const rating = parseInt(data.rating);

        const client = await MongoClient.connect
            ('mongodb+srv://krystiankaczorek1:sl4b33lo@cluster0.4yy9hyb.mongodb.net/ratings?retryWrites=true&w=majority')

        const db = client.db();
        const ratingsCollection = db.collection('ratings');
        const existingDoc = await ratingsCollection.findOne({ game_id: game_id });
        const newDoc = { game_id: game_id, ratings: [rating] };
        if (existingDoc) {

            const updatedRatings = [...existingDoc.ratings, rating];
            await ratingsCollection.updateOne({ game_id: game_id }, { $set: { ratings: updatedRatings } });

            //Obliczanie średniej oceny
            const result = await ratingsCollection.aggregate([
                { $match: { game_id: game_id } },
                { $unwind: "$ratings" },
                {
                    $group: {
                        _id: "$_id",
                        rating: { $avg: "$ratings" }
                    }
                }
            ]).toArray();

            client.close();
            res.status(201).json({ message: 'Rating updated', rating: result[0].rating });
        } else {
            await ratingsCollection.insertOne(newDoc);
            client.close();
            res.status(201).json({ message: 'Rating inserted', rating: rating });
        }
    }
}

export default handler;

