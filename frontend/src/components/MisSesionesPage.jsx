import './MisSesionesPage.css'
import { Link } from "react-router-dom"
import { getSesiones } from '../services/api'
import { useEffect, useState } from 'react'
import TableRow from './TableRow'

export default function MisSesionesPage(){
    const [sesiones, setSesiones] = useState([])

    useEffect(()=>{
        async function loadSesiones(){
            try{
                const data = await getSesiones(1)
                setSesiones(data)

            // eslint-disable-next-line no-unused-vars
            }catch(error){
                console.error("error al obtener sesiones")
            }
        }
        loadSesiones()
    },[])
    

    return(
    <section className='mis-sesiones-container'>
        <h1>Mis Sesiones</h1>
        <p>Gestiona tus encuentros programados y el historial</p>
        <table>
            <thead>
                <tr>
                    <th>Profesional</th>
                    <th>Fecha y hora</th>
                    <th>Acciones</th>
                </tr>
            </thead>
            <tbody>
                {sesiones.map((d,i) => {return<TableRow key={i} data={d}/>})}
            </tbody>
        </table>

        <span className='mis-sesiones-nueva'>
            <Link to="/" className='btn'>Nueva Sesion</Link>
        </span>
    </section>)
}