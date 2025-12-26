import { createContext, useContext,useEffect,useState } from "react";
import { fetchUser, fetchDuser } from "./action";
const DataContext = createContext();

export function DataProvider({children}){
    const [userData,setUserData]= useState(null)
    const [userActivity,setuserActivity]= useState(null)

    useEffect(()=>{
        async function userdata() {
            const userInfo = await fetchUser();
            const userAc = await fetchDuser()
            setUserData(userInfo)
            setuserActivity(userAc)
        }
        userdata()
    },[])
    
    return(
        <DataContext.Provider value={{userData,setUserData,userActivity,setuserActivity}}>
            {children}
        </DataContext.Provider>
    )
}

export function useData(){
    return useContext(DataContext)
}