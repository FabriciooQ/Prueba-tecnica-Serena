import { EstadoTurno } from "../models/EstadoTurno.js";
import PsicologoRepository from "../repository/psicologo.repository.js"

class PsicologoService{
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