import { useSession, signOut } from "next-auth/react";
import classes from "./SignedPage.module.css";
import Image from "next/image";
import rating from "../images/rating.png";
import gamer from "../images/gamer.png";
import form from "../images/form.png";

const SignedPage = () => {

    const { data: session } = useSession();

    return (
        <>
            <div className={classes.greetingPage}>
                <p>Welcome, {session.user.name}</p>
                <button className={classes.signOutButton} onClick={() => signOut()}>Sign Out</button>
            </div>
            <div className={classes.main}>
                <div className={classes.flexdiv1}>
                    <p className={classes.phrase}>Rate different games</p>
                    <Image
                        src={rating}
                        alt="rating"
                    />
                </div>
                <div className={classes.flexdiv2}>
                    <p className={classes.phrase}>Share your favourite moments</p>
                    <Image
                        src={gamer}
                        alt="gamer"
                    />
                </div>
                <div className={classes.flexdiv3}>
                    <p className={classes.phrase}>Suggest new games for our library</p>
                    <Image
                        src={form}
                        alt="form"
                    />
                </div>
            </div>
        </>

    )
};

export default SignedPage;