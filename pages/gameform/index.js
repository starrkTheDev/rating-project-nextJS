import NewGame from "components/NewGame";
import { useRouter } from "next/router";
import Head from "next/head";
import { useSession } from "next-auth/react";

const Form = () => {

    const router = useRouter();
    const { data: session } = useSession();

    async function addGameHandler(enteredGameData) {
        const response = await fetch('/api/new-game', {
            method: 'POST',
            body: JSON.stringify(enteredGameData),
            headers: {
                'Content-Type': 'application/json',
            },
        });

        const data = await response.json();
        console.log(data);

        router.push('/');
    }
    if (session) {
        return (
            <>
                <Head>
                    <title>Add Game</title>
                </Head>
                <NewGame onAddGame={addGameHandler} />
            </>
        )
    } else {
        return (
            <p style={{ textAlign: "center", fontSize: "36px" }} >You need to Sign In to access this page.</p>
        )
    }
}

export default Form;