import { Clase } from "./clases.model";

export class Dia {
    nombre: string;
    clases: Array<Clase> = [];

    constructor(nombre: string, clases: Array<Clase>) {
        this.nombre = nombre
        this.clases = clases;
    }
}