import empleadoService from "../services/empleado.service.js";

class EmpleadoController{
    getEmpleado(req, res){
        const empleado = empleadoService.returnEmpleado(1)
        if(!empleado){
            res.status(404).end("Empleado no encontrado")
        }
        res.status(200).json(empleado)
    }
}

export default new EmpleadoController()