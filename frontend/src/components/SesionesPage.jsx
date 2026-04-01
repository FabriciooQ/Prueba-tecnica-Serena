import PsicologoCard from './PsicologoCard'
import './SesionesPage.css'
import { getPsychologists } from '../services/api.js'
import { useEffect, useState } from 'react'

export default function SesionesPage(){
    const [psicologos, setPsicologos] = useState([])
    const [error, setError] = useState(null)

    useEffect(()=>{
        const cargarDatos = async () => {
        try {
            const data = await getPsychologists()
            setPsicologos(data)
        } catch (err) {
            setError("Ocurrio un error")
        }
        }   
        cargarDatos()
    },[])
    
    if (error) return <p>{error}</p>
    return(
        <section className='sesiones-container'>
            <h1>Encuentra tu espacio</h1>
            <p className='sesiones-texto'>Elije al profesional que mejor se adapte a tu momento</p>
            {error 
                ? 
                <p>{error}</p> 
                :
                <div className='psicologo-card-container'>
                    {psicologos.map(p=><PsicologoCard psicologo={p}/>)}
                </div>
            }
        </section>
    )
}