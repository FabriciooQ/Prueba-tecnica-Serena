import sessionService from "../services/session.service.js";
import PsicologoService from "../services/psicologo.service.js"
import SessionDTO from "../DTO/Session.dto.js";
import SessionRequestDTO from "../DTO/SessionRequest.dto.js";
import psicologoService from "../services/psicologo.service.js";

class SessionController{
    getSesiones(req, res){
        console.log(req.params)
        const id = parseInt(req.params.employeeId)
        const sessions = sessionService.returnSessions(id)
        const sessionsDTO = sessions.map((s)=>{
            const psicologo = psicologoService.returnPsicologo(s.idPsicologo)
            console.log("Psicologo:", psicologo)
            const turno = psicologoService.returngetTurnoPsicologo(s.id, s.idTurno)
            console.log("Turno:", turno)
            return new SessionRequestDTO(psicologo.nombre, psicologo.especialidad, psicologo.foto, turno.fechaHora, 1)
        })
        if(!sessions){
            res.status(200).end("No hay sesiones registradas")
        }else{
            res.status(200).json(sessionsDTO)
        }
    }

    saveSession(req, res){
        const sDTO = new SessionDTO(req.body.idPsicologo, req.body.idTurno, req.body.idEmpleado)
        console.log(sDTO)
        const flag = sessionService.saveSession(sDTO)
        console.log(flag)
        if(flag){
            res.sendStatus(200)
        }else{
            res.status(404).end("Error al agendar la sesion")
        }

    }
}

export default new SessionController()