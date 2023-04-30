import Link from "next/link";
import classes from "./Layout.module.css";
import { useSession } from "next-auth/react";

const Layout = (props) => {

    const { data: session } = useSession();

    return (
        <>
            <div className={classes.header}>
                <div className={classes.navigation}>
                    <Link className={classes.link} href="/">Home</Link>
                    <Link className={classes.link} href="/games">Games</Link>
                    <Link className={classes.link} href="/achievements">Achievements</Link>
                    {session && <Link className={classes.link} href="/gameform">Add game</Link>}
                    {session && <Link className={classes.link} href="/achievementform">Add achievement</Link>}
                </div>
            </div>
            <div className={classes.main}>{props.children}</div>
        </>
    )
}

export default Layout;