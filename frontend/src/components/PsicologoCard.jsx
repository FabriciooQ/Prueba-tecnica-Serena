import './PsicologoCard.css'
import { Link } from "react-router-dom"

export default function PsicologoCard({psicologo}){
    return(
        <div className='psicologo-card'>
            <span>
                <img src={`/${psicologo.foto}`} alt="" />   
                <div>
                    <h2>{psicologo.nombre}</h2>
                    <p className='psicologo-card-especialidad'>{psicologo.especialidad}</p>
                </div>
            </span>
            <p>{psicologo.descripcion}</p>
            <div className='psicologo-card-description'>
                <Link to="agendarSesion" state={{psicologo}} className = "btn">Turnos disponibles</Link>
            </div>
        </div>
    )
}