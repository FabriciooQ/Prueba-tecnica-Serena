import './MisSesionesPage.css'
import { Link } from "react-router-dom"

import TableRow from './TableRow'

export default function MisSesionesPage(){
    const data = [
        {
            nombre:"Dra Elena Rossi",
            especialidad: "Ansiedad",
            fecha:"Lunes, 15 de mayo",
            hora:"09:00hs"
        },
            {
            nombre:"Dra Elena Rossi",
            especialidad: "Ansiedad",
            fecha:"Lunes, 15 de mayo",
            hora:"09:00hs"
        },
        {
            nombre:"Dra Elena Rossi",
            especialidad: "Ansiedad",
            fecha:"Lunes, 15 de mayo",
            hora:"09:00hs"
        }    
    ]

    return(
    <section className='mis-sesiones-container'>
        <h1>Mis Sesiones</h1>
        <p>Gestiona tus encuentros programados y el historial</p>
        <table>
            <thead>
                <th>Profesional</th>
                <th>Fecha y hora</th>
                <th>Acciones</th>
            </thead>
            <tbody>
                {data.map(d => <TableRow data={d}/>)}
            </tbody>
        </table>

        <span className='mis-sesiones-nueva'>
            <Link to="/" className='btn'>Nueva Sesion</Link>
        </span>
    </section>)
}