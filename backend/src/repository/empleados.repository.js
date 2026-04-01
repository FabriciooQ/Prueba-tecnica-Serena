import Empleado from "../models/Empleado.js";
import { empleados } from "../data/dataMock.js";

class EmpleadoRepository{
    constructor(){
        this.empleados = empleados.map(e => new Empleado(e.id, e.nombre, e.foto))
    }

    findById(id){
        return this.empleados.find(e=>e.id === id)
    }
}

export default new EmpleadoRepository()