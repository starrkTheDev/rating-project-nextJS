import classes from "./RatingStars.module.css";
import { FaStar } from "react-icons/fa"
import { useState } from "react";

const RatingStars = () => {

    const [rating, setRating] = useState(null);

    return (
        <div>
            {[...Array(5)].map((star, i) => {
                const ratingValue = i + 1;
                const ratingHandler = () => setRating(ratingValue);
                console.log(rating);
                return (
                    <>
                        <input
                            className={classes.radio}
                            type="radio"
                            name="rating"
                        />
                        <FaStar
                            className={classes.stars}
                            size={15}
                            value={ratingValue}
                            onClick={ratingHandler}
                            color={ratingValue <= rating ? "#ffc107" : "gray"}
                        />
                    </>
                )
            })}
        </div>
    )
};

export default RatingStars;