import "./userinfo.css"
import { useData } from "../../../actions/dataProvider"

export default function userInfo(){
    const {userData} =useData();
    return(
      <>
           {userData ? <div className="userinfocontainer">
            <img className="profilpic" src={userData.profile.profilePicture} alt="" />
            <p>{userData.profile.firstName} {userData.profile.lastName}</p>
            <p>menbre depuis {userData.profile.createdAt}</p>
            <p>Distance parcouru {userData.statistics.totalDistance}</p>
           </div> : <p>loading...</p> }
      </>
    
    )
}