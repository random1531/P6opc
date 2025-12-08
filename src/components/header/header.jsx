import "./header.css"
import Logo from "../image/logo"
import { useNavigate } from "react-router";

export default function header(){
    const navigate = useNavigate()

    const diconect = ()=>{
        localStorage.removeItem("token");
        localStorage.removeItem("user");
        navigate("/login")
    }

    return(

        <header>
        <Logo/>
        <nav className="navigationbar">
       
       <div className="pagination">
            <p>Dashboard</p>
            <p>Mon profil</p>
       </div>
            <p onClick={diconect} className="disconnect">Se déconnecter</p>
       
        </nav>
    </header>
    )
}