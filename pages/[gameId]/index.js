import { MongoClient, ObjectId } from "mongodb";
import GameDetail from "components/GameDetail";
import { useState } from "react";

const DetailPage = (props) => {

    const [rating, setRating] = useState(0);

    const [isLoading, setIsLoading] = useState(true);

    async function addRatingHandler(enteredRatingData) {
        const response = await fetch('/api/new-rating?id=game_id', {
            method: 'POST',
            body: JSON.stringify(enteredRatingData),
            headers: {
                'Content-Type': 'application/json',
            },
        });

        const data = await response.json();
        console.log(data);
        console.log(JSON.stringify(enteredRatingData));
        if (data.rating) {
            setRating(data.rating);
            setIsLoading(false);
        }
    }

    if (isLoading) {
        return (
            <GameDetail
                image={props.gameData.image}
                title={props.gameData.title}
                id={props.gameData.id}
                rating="Loading..."
                onAddRating={addRatingHandler}
            />
        )
    } else {

        return (
            <GameDetail
                image={props.gameData.image}
                title={props.gameData.title}
                id={props.gameData.id}
                rating={rating.toFixed(2)}
                onAddRating={addRatingHandler}
            />
        )
    }
}


export async function getStaticPaths() {
    const client = await MongoClient.connect('mongodb+srv://krystiankaczorek1:sl4b33lo@cluster0.4yy9hyb.mongodb.net/games?retryWrites=true&w=majority');
    const db = client.db();
    const gamesCollection = db.collection('games');
    const games = await gamesCollection.find({}, { _id: 1 }).toArray();
    client.close();

    return {
        fallback: "blocking",
        paths: games.map(game => ({
            params: { gameId: game._id.toString() }
        }))
    }
}

export async function getStaticProps(context) {
    const gameId = context.params.gameId;
    const client = await MongoClient.connect('mongodb+srv://krystiankaczorek1:sl4b33lo@cluster0.4yy9hyb.mongodb.net/games?retryWrites=true&w=majority');
    const db = client.db();
    const gamesCollection = db.collection('games');
    const selectedGame = await gamesCollection.findOne({
        _id: new ObjectId(gameId),
    });
    client.close();

    return {
        props: {
            gameData: {
                id: selectedGame._id.toString(),
                title: selectedGame.title,
                image: selectedGame.image,
            }
        }
    }
}

export default DetailPage;