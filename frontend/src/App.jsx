import './App.css'
import MisSesionesPage from './components/MisSesionesPage'
import NavBar from './components/NavBar'
import SesionesPage from './components/SesionesPage'
import { LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import TurnosPage from './components/TurnosPage';
import ConfirmacionPage from './components/ConfirmacionPage';
import { Outlet} from "react-router-dom"
import { useEffect, useState } from 'react';
import { getEmpleado } from './services/api';



function App() {
    const [empleado, setEmpleado] = useState(null)
    const [error, setError]  = useState(null)

    useEffect(()=>{
        const loadEmpleado = async() =>{
            try{
                const data = await getEmpleado()
                setEmpleado(data)
                
            }catch(error){
                setError("No se pudo recuperar el empleado")
            }
        }
        loadEmpleado()
    },[])


  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <NavBar empleado={empleado}></NavBar>
       <Outlet />
   </LocalizationProvider>
  )
}

export default App
