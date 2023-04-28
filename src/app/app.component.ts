import { Component } from '@angular/core';
import { Clase } from './models/clases.model';
import { Dia } from './models/dia.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  public diaActual: Dia;
  public dias: Array<Dia> = [
    new Dia("Lunes", [
      new Clase( "10:00", "Calistenia", ["Matías García", "Eze Ponce", "Pimpe"]),
      new Clase( "11:30", "Flex", []),
      new Clase( "18:00", "Calistenia", ["Matías García"]),
      new Clase( "19:30", "Calistenia", []),
    ]),
    new Dia("Martes", [
      new Clase( "10:00", "Calistenia", ["Matías García", "Eze Ponce", "Pimpe"]),
      new Clase( "16:00", "Calistenia", ["Matías García"]),
      new Clase( "18:00", "Calistenia", []),
    ]),
    new Dia("Miercoles", [
      new Clase( "10:00", "Calistenia", ["Matías García", "Eze Ponce", "Pimpe"]),
      new Clase( "11:30", "Flex", []),
      new Clase( "18:00", "Calistenia", ["Matías García"]),
      new Clase( "19:30", "Calistenia", []),
    ]),
    new Dia("Jueves", [
      new Clase( "10:00", "Calistenia", ["Matías García", "Eze Ponce", "Pimpe"]),
      new Clase( "16:00", "Calistenia", ["Matías García"]),
      new Clase( "18:00", "Calistenia", []),
    ]),
    new Dia("Viernes", [
      new Clase( "10:00", "Calistenia", ["Matías García", "Eze Ponce", "Pimpe"]),
      new Clase( "11:30", "Flex", []),
      new Clase( "18:00", "Calistenia", ["Matías García"]),
      new Clase( "19:30", "Calistenia", []),
    ]),
    new Dia("Sábado", [
      new Clase( "10:00", "Calistenia", ["Matías García", "Eze Ponce", "Pimpe"]),
      new Clase( "11:30", "Flex", []),
      new Clase( "18:00", "Calistenia", ["Matías García"]),
      new Clase( "19:30", "Calistenia", []),
    ]),
  ]

  constructor() {
    this.diaActual = this.getDiaDeSemana();
  }
  
  public getDiaDeSemana(): Dia {
    return this.dias[new Date(Date.now()).getDay() -1];
  }
}
