import './App.css'
import { Outlet } from 'react-router'

function App() {
  const connexion = localStorage.getItem("user")

  if(!connexion){
   
  }

  return (
    <>
        <Outlet/>
    </>
  )
}

export default App
