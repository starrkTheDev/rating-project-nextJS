import classes from "./FirstPage.module.css";
import Image from "next/image";
import rating from "../images/rating.png";
import gamer from "../images/gamer.png";
import form from "../images/form.png";
import { signIn } from "next-auth/react";

const FirstPage = () => {

    return (
        <>
            <div className={classes.signDiv}>
                <p className={classes.enter}>Welcome to our page!</p>
                <div className={classes.signButtons}>
                    <button onClick={() => signIn()} className={classes.buttonSign}>Sign In</button>
                    <p className={classes.signupPhrase}>for:</p>
                </div>
            </div>
            <div className={classes.main}>
                <div className={classes.flexdiv1}>
                    <p className={classes.phrase}>Rating different games</p>
                    <Image
                        src={rating}
                        alt="rating"
                    />
                </div>
                <div className={classes.flexdiv2}>
                    <p className={classes.phrase}>Sharing your favourite moments</p>
                    <Image
                        src={gamer}
                        alt="gamer"
                    />
                </div>
                <div className={classes.flexdiv3}>
                    <p className={classes.phrase}>Suggesting new games for our library</p>
                    <Image
                        src={form}
                        alt="form"
                    />
                </div>
            </div>
        </>
    )
}

export default FirstPage;