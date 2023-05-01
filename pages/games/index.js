import GameList from "components/GameList";
import { MongoClient } from "mongodb";
import Head from "next/head";
import { useState } from "react";

const GamesPage = (props) => {

    const [rating, setRating] = useState(0);

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
        }
    }

    return (
        <>
            <Head>
                <title>Games</title>
            </Head>
            <GameList
                games={props.games}
                onAddRating={addRatingHandler}
                rating={rating}
            />
        </>
    )
}

export default GamesPage;

export async function getStaticProps() {
    const client = await MongoClient.connect('mongodb+srv://krystiankaczorek1:@cluster0.4yy9hyb.mongodb.net/games?retryWrites=true&w=majority');
    const db = client.db();
    const gamesCollection = db.collection('games');
    const games = await gamesCollection.find().toArray();
    client.close();

    return {
        props: {
            games: games.map((game) => ({
                title: game.title,
                image: game.image,
                id: game._id.toString(),
                // rating: game.rating || 0
            }))
        },
        revalidate: 10
    }
}

