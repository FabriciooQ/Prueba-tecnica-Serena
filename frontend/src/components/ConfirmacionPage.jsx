import './ConfirmacionPage.css'
import { Clock4 } from 'lucide-react';
import { CheckLine } from 'lucide-react';
import { useLocation } from 'react-router-dom';
import dayjs from 'dayjs';
import "dayjs/locale/es"
import { Link } from 'react-router-dom';

export default function ConfirmacionPage(){
    dayjs.locale("es")
    const location = useLocation()
    const psicologo = location.state?.psicologo
    console.log(location.state)
    const turno = location.state?.turno
    const msg = location.state?.msg

    return (
        <div className='confirmacion-container'>
            <div className='confirmacion-logo'>
                <CheckLine className='visto-lucid' size={50} />
            </div>
            <h1 className='confirmacion-h1'>{msg}</h1>
            <div className='confirmacion-card'>
                <span>
                    <img src={psicologo ? `/${psicologo.foto}` : "/logoSerena.webp"} alt="" />
                    <div className='confimacion-card-div-profesional'>
                        <h3>PROFESIONAL</h3>
                        <p>{psicologo ? psicologo.nombre : ""}</p>
                    </div>
                </span>
                <span>
                    <div className='confirmacion-wrapper-clock'>
                        <Clock4 color="white"/>
                    </div>
                    <div className='confirmacion-card-div-datos'>
                        <h3>CITA</h3>
                        <p>{dayjs.utc(turno.fechaHora).format("dddd, D [de] MMMM - HH:mm[hs]")}</p>
                    </div>
                </span>
            </div>
            <Link className="btn" to="/misSesiones">Ver mis sesiones</Link>
        </div>
    )
}