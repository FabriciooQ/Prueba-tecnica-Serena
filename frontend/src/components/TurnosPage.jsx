import dayjs from 'dayjs';
import './TurnosPage.css'
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { StaticDatePicker } from '@mui/x-date-pickers';
import { useEffect, useState } from 'react';
import { TimePicker } from '@mui/x-date-pickers/TimePicker';
import { ArrowLeft } from 'lucide-react';
import { Link } from "react-router-dom"
import { useLocation } from "react-router-dom"
import { getTurnosPsicologo } from '../services/api';
import utc from "dayjs/plugin/utc"
import timezone from "dayjs/plugin/timezone"
import { useMemo } from 'react';


export default function TurnosPage(){
    const [fechaTurno, setFechaTurno] = useState(dayjs())
    const [horaTurno, setHoraTurno] = useState(dayjs())
    
    const [agenda, setAgenda] = useState(null)
    const [turnosOcupados, setTurnosOcupados] = useState([])
    const [error, setError] = useState(null)
    
    const location = useLocation()
    const psicologo = location.state.psicologo
    
    const [fechayHora, setFechaYHora] = useState(null)

    const turnosPorLibresDia = useMemo(()=>{
        if(!agenda){
            return null
        }
        //fecha actual seleccionada en utc
        const fechaHoraUTC = dayjs.utc(fechaTurno)
        const soloFechaUTC = fechaHoraUTC.startOf("day")

        //comparamos con agenda y devolvemos lista de turnos
        const turnosParaFecha = agenda.filter((d) => {
            const auxFecha = dayjs.utc(d.fechaHora).startOf("day")
            if(soloFechaUTC.isSame(auxFecha)){
                return d
            }
        })
        //devolvemos solo turnos ocupados
        const res = turnosParaFecha.filter(t => t.estado==1)
        console.log(res)
        return res
    },[fechaTurno])
    
    dayjs.extend(utc)
    dayjs.extend(timezone)
    
    function reservarTurno(){

    }

    const shouldDisableTime = (value,view)=>{
      
    } 
    
    useEffect(()=>{
        const loadTurnos = async()=>{
            if(!psicologo){
                return
            }
            try{
                const data = await getTurnosPsicologo(psicologo.id)
                setAgenda(data)
                const aux = data.filter(d=>d.estado===1)

                setTurnosOcupados(aux)

                
                
            }catch(error){
                setError("Ocurrio un error")
            }
           
        }
        loadTurnos()
    },[psicologo])



    return(
        <section className='turnos-container'>
            <span className='turnos-button-volver'>
                <Link to="/" className='btn button-volver'>Volver a profesionales</Link>
            </span>
            <div className='turnos-card'>
                <span className='turnos-card-profesional'>
                    <img src="/logoSerena.webp" alt="" />
                    <div>
                        <h1>nombre</h1>
                        <h3>Especialidad</h3>
                    </div>
                </span>
                <div className='date-picker-container'>
                    <h1>{`Fecha ${fechaTurno}`}</h1>
                    <h1>{`Hora ${horaTurno}`}</h1>
                    <StaticDatePicker value={fechaTurno} 
                        onChange={setFechaTurno} 
                        minDate={dayjs()} 
                        maxDate={dayjs().add(30,'day')}
                        slotProps={{
                                actionBar: {
                                actions: []
                                }
                            }} 
                        />
                    <TimePicker value={horaTurno} 
                        onChange={setHoraTurno} 
                        views={['hours']} 
                        minTime={dayjs().hour(9)} 
                        maxTime={dayjs().hour(18)}
                        minutesStep={30} 
                        shouldDisableTime={shouldDisableTime}></TimePicker>
                </div>
                    <button onClick={reservarTurno} className='turnos-button-confirmar'>Confirmar</button>
            </div>
        </section>
    )
}