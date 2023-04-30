import AchievementItem from "./AchievementItem";
import classes from "./GameList.module.css";

const AchievementList = (props) => {
    return (
        <ul className={classes.list}>
            {props.achievements.map((achievement) => (
                <AchievementItem
                    key={achievement.id}
                    id={achievement.id}
                    image={achievement.image}
                    title={achievement.title}
                    name={achievement.name}
                />
            ))}
        </ul>
    )
}

export default AchievementList;