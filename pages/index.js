import FirstPage from "components/FirstPage";
import Head from "next/head";
import { useSession, signOut } from "next-auth/react";
import SignedPage from "components/SignedPage";


const HomePage = () => {

    const { data: session } = useSession();

    return (
        <>
            <Head>
                <title>Game rating</title>
            </Head>
            {!session && <FirstPage />}
            {session && <SignedPage />}
        </>
    )
}

export default HomePage;