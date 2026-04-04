import SessionRepository from "../repository/session.repository.js"
import psicologoRepository from "../repository/psicologo.repository.js"
import sessionRepository from "../repository/session.repository.js"
import empleadosRepository from "../repository/empleados.repository.js"
import { EstadoTurno } from "../models/EstadoTurno.js"

class SessionService{
    returnSessions(idEmpleado){
        return sessionRepository.getSessions(idEmpleado)
    }

    saveSession(sessionDTO){
        const psicologo = psicologoRepository.findById(parseInt(sessionDTO.idPsicologo))
        if(!psicologo || !psicologo.disponibilidad){
            return null
        }
        const turno = psicologo.turnos.find(t=>t.id==sessionDTO.idTurno)
        if(!turno || turno.estado === EstadoTurno["NO DISPONIBLE"]){
            return null;
        }
        console.log("buscando empleado")
        const empleado = empleadosRepository.findById(sessionDTO.idEmpleado)
        if(!empleado){
            console.log("empleado nulo")
            return null
        }
        turno.estado = EstadoTurno["NO DISPONIBLE"]
        sessionRepository.saveSession(sessionDTO)
        return true
    }
}



export default new SessionService()