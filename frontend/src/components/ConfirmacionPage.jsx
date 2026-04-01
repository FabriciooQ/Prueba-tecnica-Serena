import './ConfirmacionPage.css'
import { Clock4 } from 'lucide-react';
import { CheckLine } from 'lucide-react';

export default function ConfirmacionPage(){
    return (
        <div className='confirmacion-container'>
            <div className='confirmacion-logo'>
                <CheckLine className='visto-lucid' size={50} />
            </div>
            <h1 className='confirmacion-h1'>Sesion reservada!</h1>
            <div className='confirmacion-card'>
                <span>
                    <img src="/logoSerena.webp" alt="" />
                    <div className='confimacion-card-div-profesional'>
                        <h3>PROFESIONAL</h3>
                        <p>NombreProfesional</p>
                    </div>
                </span>
                <span>
                    <div className='confirmacion-wrapper-clock'>
                        <Clock4 color="white"/>
                    </div>
                    <div className='confirmacion-card-div-datos'>
                        <h3>CITA</h3>
                        <p>Lunes, 15 de Mayo - 11:00hs</p>
                    </div>
                </span>
            </div>
            <button>Ver mis sesiones</button>
        </div>
    )
}