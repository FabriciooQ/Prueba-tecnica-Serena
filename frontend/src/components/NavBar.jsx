import './NavBar.css'
import { Link } from "react-router-dom"


export default function NavBar({empleado}){

    return(
        <nav className='navBar'>
            <span className='nav-container-logo'>
                <img src="/logoSerena.webp"/>
                <h1>Serena</h1>
            </span>
            <span className='nav-container-sesiones'>
                <ul>
                    <li><Link className='sesiones-button' to="/">Agendar Sesion</Link></li>
                    <li><Link className='sesiones-button' to="/misSesiones">Mis sesiones</Link></li>
                </ul>
                <div className='nav-container-empleado'>
                    <img src={`/${empleado?.foto}`} alt="" />
                    <p>{empleado?.nombre}</p>
                    <p>Empleado</p>
                </div>
            </span>
        </nav>
    )
}