import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { createBrowserRouter, RouterProvider } from "react-router";
import App from './App.jsx'
import SesionesPage from './components/SesionesPage.jsx';
import TurnosPage from './components/TurnosPage.jsx';
import ConfirmacionPage from './components/ConfirmacionPage.jsx';
import MisSesionesPage from './components/MisSesionesPage.jsx';


const routes = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        index: true,  //consume GET /psychologists en el back
        element: <SesionesPage /> 
      },
      {
        path: "agendarSesion", //consume GET /psychologists/:id/slots y realiza el POST /sessions en el back
        element: <TurnosPage />
      },
      {
        path: "confirmacionSesion", 
        element: <ConfirmacionPage/>
      },
      {
        path: "misSesiones",  //consume GET /sessions/:employeeId en el back
        element: <MisSesionesPage/>
      }
    ]
  }
])



createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={routes} />
  </StrictMode>,
)
