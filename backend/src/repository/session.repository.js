import Session from "../models/Session.js"

class SessionRepository{
    constructor(){
        this.sessions = []
        this.id = 1
    }

    saveSession(sessionDTO){
        const session = new Session(this.id, sessionDTO.idPsicologo, sessionDTO.idTurno, sessionDTO.idEmpleado)
        this.id++
        this.sessions.push(session)
    }

    getSessions(idEmpleado){
        if(this.sessions != undefined){
            const sessionEmpleado = this.sessions.filter(s => s.idEmpleado===idEmpleado)
            return sessionEmpleado
        }else{
            return null
        }
    }
    
}

export default new SessionRepository()