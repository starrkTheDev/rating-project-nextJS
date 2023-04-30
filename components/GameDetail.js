import classes from './GameDetail.module.css';
import { useRef, useState } from 'react';

function GameDetail(props) {

    const ratingRef = useRef();

    const [rating, setRating] = useState(false);
    const [value, setValue] = useState('')

    const inputChanger = (event) => {
        setValue(event.target.value)
    }

    const ratingHandler = (event) => {
        event.preventDefault();
        const enteredRating = ratingRef.current.value;
        const ratingData = {
            rating: [parseInt(enteredRating)],
            id: props.id,
        };
        if (enteredRating === null) {
            return
        } else {
            props.onAddRating(ratingData);
            setRating(true);
        }
    }


    return (
        <section className={classes.detail}>
            <img
                src={props.image}
                alt={props.title}
            />
            <h1 className={classes.title}>{props.title}</h1>
            <form className={classes.form} onSubmit={ratingHandler}>
                <input
                    className={classes.radio}
                    onChange={inputChanger}
                    type="number"
                    name="rating"
                    min={1}
                    max={5}
                    step={1}
                    ref={ratingRef}
                    size={2}
                />
                <button disabled={!value} className={classes.rateButton} type="submit">Rate</button>
            </form>
            {rating && <p>Rating: {props.rating}</p>}
            {!rating && <p>Rate the game to see the rating!</p>}
        </section>
    );
}

export default GameDetail;