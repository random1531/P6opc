import "./userdetails.css";
import { useData } from "../../../../actions/dataProvider";

export default function UserDetails() {
    const { userData } = useData();

  return (
    <div className="userdetailsblock">
      <h3>Votre profil</h3>
      <hr className="bar" />
     {userData ? (<ul>
        <li>Âge : {userData.profile.age}</li>
        <li>Genre : Femme</li>
        <li>Taille : {userData.profile.height}</li>
        <li>Poids : {userData.profile.weight}kg</li>
      </ul>):(
      <p>Loading...</p>)}
    </div>
  );
}
