import PsicologoDTO from "../DTO/psicologo.dto.js";
import psicologoService from "../services/psicologo.service.js";
import PsicologoService from "../services/psicologo.service.js";

class PsicologoController{

    getDisponibles(req, res){
        const psicologos = psicologoService.returnDisponibles()
        const psicologosDTOs = psicologos.map(p=> new PsicologoDTO(p.id, p.nombre, p.especialidad, p.disponibilidad, p.descripcion, p.foto))
        res.status(200).json(psicologosDTOs)
    }

    getTurnos(req, res){
        const id = parseInt(req.params.id)
        res.status(200).json(psicologoService.returnTurnosPsicologo(id))
    }
}

export default new PsicologoController()