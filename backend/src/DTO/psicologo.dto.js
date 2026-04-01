import {Especialidad} from '../models/Especialidad.js'

export default class PsicologoDTO{
    constructor(id, nombre, esp, disponible, descripcion, foto){
        this.id = id,
        this.nombre = nombre,
        this.especialidad = Especialidad[esp],
        this.disponible = disponible
        this.descripcion = descripcion,
        this.foto = foto
    }
}