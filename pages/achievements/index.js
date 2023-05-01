import AchievementList from "components/AchievementList";
import { MongoClient } from "mongodb";
import Head from "next/head";


const AchievementsPage = (props) => {
    return (
        <>
            <Head>
                <title>Achievements</title>
            </Head>
            <AchievementList achievements={props.achievements} />
        </>
    )
}

export default AchievementsPage;

export async function getStaticProps() {
    const client = await MongoClient.connect('mongodb+srv://krystiankaczorek1:@cluster0.4yy9hyb.mongodb.net/achievements?retryWrites=true&w=majority');
    const db = client.db();
    const achievementsCollection = db.collection('achievements');
    const achievements = await achievementsCollection.find().toArray();
    client.close();

    return {
        props: {
            achievements: achievements.map((achievement) => ({
                title: achievement.title,
                image: achievement.image,
                id: achievement._id.toString(),
                name: achievement.name
            }))
        },
        revalidate: 10
    }
}
