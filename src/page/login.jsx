import FormContainer from "../components/containerform/containerform"
import LoginPicture from "../components/image/loginpic"
import Logo from "../components/image/logo"
import "../css/login.css"

export default function login() {
    return (
        <main className="login">
            <div className="left">
                <div className="logologin" >
            <Logo />
                </div>
            <FormContainer/>
             
            </div>
            <div className="right">
                <LoginPicture />

            </div>
        </main>
    )
}