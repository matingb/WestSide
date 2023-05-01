import { Component, Input } from '@angular/core';
import { Clase } from 'src/app/models/clases.model';

@Component({
  selector: 'gym-class-details',
  templateUrl: './class-details.component.html',
  styleUrls: ['./class-details.component.scss']
})
export class ClassDetailsComponent {

  @Input() clase: Clase = new Clase("", "", []);

  anotarse() {
    this.clase.alumnos.push("Nicolas Fuentes");
  }

  desanotarme(alumno: string) {
    let index = this.clase.alumnos.indexOf(alumno); 

    if (index !== -1) {
      this.clase.alumnos.splice(index, 1);
    }
  }
}
