import dayjs from 'dayjs';
import './TurnosPage.css'
import { MobileDateTimePicker } from '@mui/x-date-pickers/MobileDateTimePicker';
import { StaticDateTimePicker } from '@mui/x-date-pickers/StaticDateTimePicker';
import { useEffect, useState } from 'react';
import { Link } from "react-router-dom"
import { useLocation } from "react-router-dom"
import { getTurnosPsicologo } from '../services/api';
import utc from "dayjs/plugin/utc"
import timezone from "dayjs/plugin/timezone"
import { postTurno } from '../services/api';
import { useNavigate } from "react-router-dom"



export default function TurnosPage(){
    dayjs.extend(utc)
    dayjs.extend(timezone)
    
    const [flagMobile, setFlagMobile] = useState(false)
    const [_, setError] = useState(null)
    const [agenda, setAgenda] = useState(null)
    const [turnoSeleccionado, setTurnoSeleccionado] = useState(dayjs().utc().startOf("day"))
    const navigate = useNavigate()

    const location = useLocation()
    const psicologo = location.state.psicologo
    
    
    function reservarTurno(){
        
        const turno = agenda.find((t) => {
            const fechaAux = dayjs(t.fechaHora)
            return fechaAux.isSame(turnoSeleccionado)
        })
        async function post(){
            let msg = ""
            try{
                await postTurno({
                    "idPsicologo":psicologo.id,
                    "idTurno": turno.id,
                    "idEmpleado": 1
                })
                msg="Sesion reservada con exito!"
            }catch{
                msg="Sesion reservada con exito!"
            }finally{
                navigate("/confirmacionSesion",{
                    state:{
                        msg:msg,
                        turno:turno,
                        psicologo:psicologo
                    }
                })
            }
        }
        post()
    }

    const shouldDisableYear = ((date)=>{
        if(!agenda){
            return false
        }
        const year = date.year()
        return !agenda.some((t)=>{
            const yearAux = dayjs(t.fechaHora).year()
            return yearAux == year
        })
    })

    const shouldDisableMonth = ((date)=>{
        if(!agenda){
            return false
        }
        const month = date.month()
        return !agenda.some((t)=>{
            const monthAux = dayjs(t.fechaHora).month()
            return monthAux == month
        })
    })
    
    const shouldDisableDate = ((date)=>{
        if(!agenda){
            return false
        }
        const day = date.day()
        return !agenda.some((t)=>{
            const dayAux = dayjs(t.fechaHora).day()
            return dayAux == day
        })
    })

    const shouldDisableTime = ((value, view) =>{
        if(!agenda){
            return false
        }
        if(view == "hours"){
            const date = value
            return !agenda.some((t)=>{
                const dateAux = dayjs(t.fechaHora)
                return date.isSame(dateAux)
            })
        }
    })
    

    //use effect para saber si se accede desde mobile o pc
    useEffect(()=>{
        const width = screen.width
        if(width < 650){
            setFlagMobile(true);
        }else{
            setFlagMobile(false)
        }
        console.log(flagMobile)
    }, [])
    
    useEffect(()=>{
        const loadTurnos = async()=>{
            if(!psicologo){
                return
            }
            try{
                const data = await getTurnosPsicologo(psicologo.id)
                setAgenda(data)                
                
            // eslint-disable-next-line no-unused-vars
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
                    <img src={psicologo.foto} alt="" />
                    <div>
                        <h1>{psicologo.nombre}</h1>
                        <h3>{psicologo.especialidad}</h3>
                    </div>
                </span>
                <div className='date-picker-container'>
                    {flagMobile 
                    ? <MobileDateTimePicker value={turnoSeleccionado} 
                        onChange={(newValue) => setTurnoSeleccionado(newValue.utc())} 
                        minDate={dayjs().utc()} 
                        maxDate={dayjs().utc().add(30,'day')}
                        views={['year', 'month', 'day', 'hours']}
                        shouldDisableYear={shouldDisableYear}
                        shouldDisableMonth={shouldDisableMonth}
                        shouldDisableDate={shouldDisableDate}
                        shouldDisableTime={shouldDisableTime}
                        slotProps={{
                                actionBar: {
                                actions: []
                                }
                            }} 
                        className='mobile-picker'
                        />
                    : <StaticDateTimePicker value={turnoSeleccionado} 
                        onChange={(newValue) => setTurnoSeleccionado(newValue.utc())} 
                        minDate={dayjs().utc()} 
                        maxDate={dayjs().utc().add(30,'day')}
                        views={['year', 'month', 'day', 'hours']}
                        shouldDisableYear={shouldDisableYear}
                        shouldDisableMonth={shouldDisableMonth}
                        shouldDisableDate={shouldDisableDate}
                        shouldDisableTime={shouldDisableTime}
                        slotProps={{
                                actionBar: {
                                actions: []
                                }
                            }} 
                        sho
                        />
                    }
                    
                </div>
                    <button onClick={reservarTurno} className='turnos-button-confirmar'>Confirmar</button>
            </div>
        </section>
    )
}