import { Especialidad } from "../models/Especialidad.js"

export default class SessionRequestDTO{
    constructor(nombrePsicologo, especialidad, fotoPsicologo, fechaTurno, idEmpleado){
        this.nombrePsicologo = nombrePsicologo
        this.especialidadPsicologo = Especialidad.especialidad
        this.fotoPsicologo = fotoPsicologo
        this.fechaTurno = fechaTurno
        this.idEmpleado = idEmpleado
    }
}