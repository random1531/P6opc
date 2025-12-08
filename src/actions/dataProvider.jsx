import { createContext, useContext,useEffect,useState } from "react";
import { fetchUser } from "./action";
const DataContext = createContext();

export function DataProvider({children}){
    const [userData,setUserData]= useState(null)
    useEffect(()=>{
        async function userdata() {
            const userInfo = await fetchUser();
            setUserData(userInfo)
        }
        userdata()
    },[])
    
    return(
        <DataContext.Provider value={{userData,setUserData}}>
            {children}
        </DataContext.Provider>
    )
}

export function useData(){
    return useContext(DataContext)
}