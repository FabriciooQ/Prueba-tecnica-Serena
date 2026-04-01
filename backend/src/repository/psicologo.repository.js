import Psicologo from "../models/Psicologo.js"
import {psicologosJSON} from "../data/dataMock.js"


class PsicologoRepository {
    constructor(){
        this.psicologos  = psicologosJSON.map( (o) => {
            let p = new Psicologo(o.id, o.nombre, o.especialidad, o.disponibilidad, o.descripcion, o.foto) 
            return p
        })
    }

    findAll() {
        return this.psicologos
    }

    findById(id){
        return this.psicologos.find(p=>p.id === id)
    }

    findDisponibles(){
        return this.psicologos.filter(p =>  p.disponibilidad)
    }

}

export default new PsicologoRepository()