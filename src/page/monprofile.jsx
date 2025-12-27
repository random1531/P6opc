import UserInfo from "../components/main/user/userInfo";
import Card from "../components/card/card";
import { useData } from "../actions/dataProvider";
import UserDetails from "../components/main/user/userDetails/UserDetails";
import "../css/profile.css";

export default function Profile() {
  const { userData, userActivity } = useData();
  const Totalburned = userActivity
    ? userActivity.reduce((a, b) => a + b.caloriesBurned, 0)
    : 0;
  const transformTime = (minutes) => {
    const h = Math.floor(minutes / 60);
    const m = minutes % 60;
    return `${h}h ${m.toString().padStart(2, "0")}min`;
  };

  const DayOfRest = (createdAt) => {
    const now = new Date();
    const created = new Date(createdAt);
    const diffTime = now - created;
    return Math.floor(diffTime / (1000 * 3600 * 24));
  };

  return (
    <>
      <div className="profileD">
        <div className="ProfileDetails">
          <UserInfo />
          <UserDetails />
        </div>
        {userData ? (
          <div className="cardProfile">
            <Card
              Title="Temps total couru"
              d={transformTime(userData.statistics.totalDuration)}
            />
            <Card Title="Calories brûlées" d={`${Totalburned} cal`} />
            <Card
              Title="Distance totale parcourue"
              d={`${userData.statistics.totalDistance} km`}
            />
            <Card
              Title="Nombre de jours de repos"
              d={`${
                Math.sign(
                  DayOfRest(userData.profile.createdAt) -
                    userData.statistics.totalSessions
                ) === -1
                  ? 0
                  : DayOfRest(userData.profile.createdAt) -
                    userData.statistics.totalSessions
              } jours`}
            />
            <Card
              Title="Nombre de sessions"
              d={`${userData.statistics.totalSessions} sessions`}
            />
          </div>
        ) : (
          <p>loading ...</p>
        )}
      </div>
    </>
  );
}
