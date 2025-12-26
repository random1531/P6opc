import { useData } from "../actions/dataProvider";
    const { userActivity } = useData();

    if (!userActivity || userActivity.length === 0) {
        return <div>Chargement...</div>;
    }
import UserInfo from "../components/main/user/userInfo"
import Card from "../components/card/card"
import { useData } from "../actions/dataProvider"

export default function Profile() {
    const { userData, userActivity } = useData();
    const f = userActivity
    const t = f.reduce((a,b)=> a + b.distance,0)
    console.log(t)
    return (
        <>
            <UserInfo />
            <Card />
        </>
    )
}