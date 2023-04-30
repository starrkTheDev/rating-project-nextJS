import { useRef } from "react"
import classes from "./NewGame.module.css";
import { useSession } from "next-auth/react";

const NewAchievement = (props) => {

    const { data: session } = useSession();

    const titleInputRef = useRef();
    const imageInputRef = useRef();

    const submitHandler = (event) => {
        event.preventDefault()

        const enteredTitle = titleInputRef.current.value;
        const enteredImage = imageInputRef.current.value;

        const achievementData = {
            title: enteredTitle,
            image: enteredImage,
            name: session.user.name
        };
        props.onAddAchievement(achievementData);
    }

    return (
        <form className={classes.form} onSubmit={submitHandler}>
            <div className={classes.flexdiv}>
                <label htmlFor="title">Achievement Title:</label>
                <input type="text" id="title" width="300px" required ref={titleInputRef} />
            </div>
            <div className={classes.flexdiv}>
                <label htmlFor="image">Image URL:</label>
                <input type="url" id="image" required ref={imageInputRef} />
            </div>
            <div className={classes.flexdiv}>
                <button>Add Achievement</button>
            </div>
        </form>
    )
}

export default NewAchievement;