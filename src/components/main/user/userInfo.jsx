import "./userinfo.css";
import { useData } from "../../../actions/dataProvider";

export default function userInfo() {
  const { userData, userActivity } = useData();


  
  return (
    <>
      {userData ? (
        <div className="userinfocontainer">
          <img
            className="profilpic"
            src={userData.profile.profilePicture}
            alt=""
          />
          <div className="leftUserHead">
            <h2 className="nameProfile">
              {userData.profile.firstName} {userData.profile.lastName}
            </h2>
            <span className="longerCreate">
              Menbre depuis le{" "}
              {new Date(userData.profile.createdAt).toLocaleString("fr-FR", {
                day: "numeric",
                month: "long",
                year: "numeric",
              })}
            </span>
          </div>
        </div>
      ) : (
        <p>loading...</p>
      )}
    </>
  );
}
