import sessionService from "../services/session.service.js";
import SessionDTO from "../DTO/Session.dto.js";

class SessionController{
    getSesiones(req, res){
        const id = parseInt(req.params.employeeId)
        const sessions = sessionService.returnSessions(id)
        if(!sessions){
            res.status(200).end("No hay sesiones registradas")
        }else{
            res.status(200).json(sessions)
        }
    }

    saveSession(req, res){
        const sDTO = new SessionDTO(req.body.idPsicologo, req.body.idTurno, req.body.idEmpleado)
        const flag = sessionService.saveSession(sDTO)
        if(flag){
            res.sendStatus(200)
        }else{
            res.status(404).end("Error al agendar la sesion")
        }

    }
}

export default new SessionController()