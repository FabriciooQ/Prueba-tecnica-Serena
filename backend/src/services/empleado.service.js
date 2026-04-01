import EmpleadoRepository from "../repository/empleados.repository.js"

class EmpleadoService{
    returnEmpleado(id){
        return EmpleadoRepository.findById(1)
    }
}

export default new EmpleadoService()