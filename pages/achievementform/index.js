import NewAchievement from "components/NewAchievement"
import { useRouter } from "next/router";
import Head from "next/head";
import { useSession } from "next-auth/react";

const Form = () => {

    const router = useRouter();
    const { data: session } = useSession();

    async function addAchievementHandler(enteredAchievementData) {
        const response = await fetch('/api/new-achievement', {
            method: 'POST',
            body: JSON.stringify(enteredAchievementData),
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
                    <title>Add Achievement</title>
                </Head>
                <NewAchievement onAddAchievement={addAchievementHandler} />
            </>
        )
    } else {
        return (
            <p style={{ textAlign: "center", fontSize: "36px" }} >You need to Sign In to access this page.</p>
        )
    }
}

export default Form;