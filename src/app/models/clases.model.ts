import { Alumno } from "./alumno.model";

export class Clase {
    horario: string;
    tipo: string;
    alumnos: Array<Alumno> = [];

    constructor(horario: string, tipo: string, alumnos: Array<Alumno>) {
        this.horario = horario;
        this.tipo = tipo;
        this.alumnos = alumnos;
    }
}