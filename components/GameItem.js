import classes from "./GameItem.module.css";
import RatingStars from "./RatingStars";

import { useRouter } from "next/router";


const GameItem = (props) => {

    const router = useRouter();

    const showDetailsHandler = () => {
        router.push("/" + props.id);
    }

    return (
        <li onClick={showDetailsHandler} className={classes.item}>
            <img className={classes.image} src={props.image} alt={props.title} width={300} height={400} />
            <p className={classes.title}>{props.title}</p>
        </li>
    )
}

export default GameItem

