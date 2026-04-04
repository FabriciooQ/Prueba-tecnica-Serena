import { EstadoTurno } from "./EstadoTurno.js";
import Turno from "./Turno.js";
import dayjs from 'dayjs';
import utc from "dayjs/plugin/utc.js"
import timezone from "dayjs/plugin/timezone.js"

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
        dayjs.extend(utc)
        dayjs.extend(timezone)
        let id=1;
        const horaDesde = 9;
        const horaHasta = 18;
        const duracionTurno = 1;
        const agenda = [];

        for (let i = 0; i < 30; i++) {
            const fechaDia = dayjs().utc().add(i, "day").startOf("hour").hour(horaDesde);

            for (let j = horaDesde; j < horaHasta; j += duracionTurno) {
                const turnoFecha = fechaDia.hour(j);
                agenda.push(new Turno(id, turnoFecha, EstadoTurno.DISPONIBLE));
                id++;
            }
        }

        return agenda;
    }


}