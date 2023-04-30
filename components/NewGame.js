import { useRef } from "react"
import classes from "./NewGame.module.css";

const NewGame = (props) => {

    const titleInputRef = useRef();
    const imageInputRef = useRef();

    const submitHandler = (event) => {
        event.preventDefault()

        const enteredTitle = titleInputRef.current.value;
        const enteredImage = imageInputRef.current.value;

        const gameData = {
            title: enteredTitle,
            image: enteredImage,
        };
        props.onAddGame(gameData);
    }

    return (
        <form className={classes.form} onSubmit={submitHandler}>
            <div className={classes.flexdiv}>
                <label htmlFor="title">Game Title:</label>
                <input type="text" id="title" width="300px" required ref={titleInputRef} />
            </div>
            <div className={classes.flexdiv}>
                <label htmlFor="image">Image URL:</label>
                <input type="url" id="image" required ref={imageInputRef} />
            </div>
            <div className={classes.flexdiv}>
                <button>Add Game</button>
            </div>
        </form>
    )
}

export default NewGame;