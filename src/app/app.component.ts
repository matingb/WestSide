import { Component } from '@angular/core';
import { Clase } from './models/clases.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  private dias: string[] = ["Lunes", "Martes", "Miércoles", "Jueves", "Viernes", "Sábado", "Domingo"];
  public clases: Array<Clase> = [
    new Clase( "10:00", "Calistenia", ["Matías García", "Eze Ponce", "Pimpe"]),
    new Clase( "11:30", "Flex", []),
    new Clase( "18:00", "Calistenia", ["Matías García"]),
    new Clase( "19:30", "Calistenia", []),
  ]
  
  public getDiaDeSemana(): string {
    return this.dias[new Date(Date.now()).getDay() -1];
  }
}
