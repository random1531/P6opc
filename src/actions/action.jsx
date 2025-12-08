import { Navigate } from "react-router";

export async function connexion({ username, password }) {

    const response = await fetch("http://localhost:8000/api/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ username, password })
    });
    const connect = await response.json();
    if (response.status === 200) {
        localStorage.setItem("token", connect.token)
        localStorage.setItem("user", connect.userId)
        return { status: response.status, message: "connecter" };
    } else {
        return { status: response.status, message: "erreur de connextion" }
    }
}

export async function fetchUser(){
    
    const response = await fetch("http://localhost:8000/api/user-info",{
        method: "GET",
        headers: {
            'Authorization': 'Bearer ' + localStorage.getItem("token"),
             "Content-Type": "application/json" ,
        }
    })
    const userInfoData = await response.json()
    return userInfoData 
}