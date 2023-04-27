export class Clase {
    horario: string;
    tipo: string;
    alumnos: Array<string> = [];

    constructor(horario: string, tipo: string, alumnos: Array<string>) {
        this.horario = horario;
        this.tipo = tipo;
        this.alumnos = alumnos;
    }
}