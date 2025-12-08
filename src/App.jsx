import './App.css'
import { Outlet } from 'react-router'
import Header from "./components/header/header"
import { DataProvider } from "./actions/dataProvider"

function App() {



  return (
    <main>
      <Header />
      <DataProvider>
        <Outlet />
      </DataProvider>
    </main>
  )
}

export default App
