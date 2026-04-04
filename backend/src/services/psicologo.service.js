import { EstadoTurno } from "../models/EstadoTurno.js";
import psicologoRepository from "../repository/psicologo.repository.js";
import PsicologoRepository from "../repository/psicologo.repository.js"

class PsicologoService{
    returnPsicologo(id){
        return psicologoRepository.findById(id)
    }

    returngetTurnoPsicologo(idPsicologo, idTurno){
        const psicologo = psicologoRepository.findById(idPsicologo)
        console.log(idTurno)
        const turno = psicologo.turnos.find(t => {
            return t.id === idTurno
        })
        console.log(turno)
        return turno
    }

    returnAll(){
        return PsicologoRepository.findAll()
    }

    returnDisponibles(){
        return PsicologoRepository.findDisponibles()
    }

    returnTurnosPsicologo(id){
        const psicologo = PsicologoRepository.findById(id);
        if(psicologo.disponibilidad){
            let turnosDisponibles = psicologo.turnos.filter(t=>t.estado===EstadoTurno.DISPONIBLE)
            return turnosDisponibles
        }else{
            return null
        }
    }
}

export default new PsicologoService()