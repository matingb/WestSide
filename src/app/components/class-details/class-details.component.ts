import { Component, Input } from '@angular/core';
import { Clase } from 'src/app/models/clases.model';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'gym-class-details',
  templateUrl: './class-details.component.html',
  styleUrls: ['./class-details.component.scss']
})
export class ClassDetailsComponent {

  @Input() clase: Clase = new Clase("", "", []);

  constructor(public dialog: MatDialog) {}

  openModal() {
    const dialogRef = this.dialog.open(MiModalComponent, {
      data: {parametro: 'valor del parametro'}
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });

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
