import classes from "./AchievementItem.module.css";

const AchievementItem = (props) => {
    return (
        <li className={classes.item}>
            <img className={classes.image} src={props.image} alt={props.title} />
            <p className={classes.title}>{props.title} by {props.name} </p>
        </li>
    )
}

export default AchievementItem;