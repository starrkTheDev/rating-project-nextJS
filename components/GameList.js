import GameItem from "./GameItem";
import classes from "./GameList.module.css";

const GameList = (props) => {

    const ratingHandler = (enteredRatingData) => {
        const ratingData = {
            ...enteredRatingData,
        };
        console.log(ratingData);
        props.onAddRating(ratingData);
    }

    return (
        <ul className={classes.list}>
            {props.games?.map((game) => (
                <GameItem
                    onAddRating={ratingHandler}
                    rating={props.rating}
                    key={game.id}
                    id={game.id}
                    image={game.image}
                    title={game.title}
                />
            ))}
        </ul>
    )
}

export default GameList;