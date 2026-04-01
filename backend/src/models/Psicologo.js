import { EstadoTurno } from "./EstadoTurno.js";
import Turno from "./Turno.js";

export default class Psicologo{
    constructor(id, nombre, especialidad, disponibilidad, descripcion, foto){
        this.id = id;
        this. nombre = nombre;
        this.especialidad = especialidad;
        this.disponibilidad = disponibilidad;
        this.turnos = this.generarAgendaDeTurnos()
        this.descripcion = descripcion,
        this.foto = foto
    }

    generarAgendaDeTurnos() {
        let id=1;
        const horaDesde = 9;
        const horaHasta = 18;
        const duracionTurno = 1;
        const agenda = [];

        for (let i = 0; i < 30; i++) {
            const fechaDia = new Date();
            fechaDia.setDate(fechaDia.getDate() + i);
            fechaDia.setHours(horaDesde, 0, 0, 0); 

            for (let j = 0; j < (horaHasta - horaDesde); j += duracionTurno) {
                const turnoFecha = new Date(fechaDia);
                turnoFecha.setHours(horaDesde + j); 
                agenda.push(new Turno(id, turnoFecha, EstadoTurno.DISPONIBLE));
                id++;
            }
        }

        return agenda;
    }


}