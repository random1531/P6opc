import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router/dom";
import PrivateRoute from "./actions/PrivateRoute.jsx"
import App from './App.jsx'
import Login from './page/login.jsx'
import Dashboard from "./page/dashboard.jsx"
import Profil from "./page/monprofile.jsx"
import './index.css'

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <PrivateRoute>
        <App />
      </PrivateRoute>
    ),
    children: [
      { path: "/dashboard", element: <Dashboard /> },
      { path: "/profile", element: <Profil /> }
    ]
  },
  {
    path: "/login",
    element: <Login />

  }
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />


  </StrictMode>,
)
