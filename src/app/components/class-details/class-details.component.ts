import { Component, Input } from '@angular/core';
import { Clase } from 'src/app/models/clases.model';
import { AnotarseModalComponent } from 'src/app/modals/anotarse-modal/anotarse-modal.component';
import { Alumno } from 'src/app/models/alumno.model';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'gym-class-details',
  templateUrl: './class-details.component.html',
  styleUrls: ['./class-details.component.scss']
})
export class ClassDetailsComponent {

  @Input() clase: Clase;

  constructor(private modalService: NgbModal) {}

  anotarse() {
    const modalRef = this.modalService.open(AnotarseModalComponent, { centered: true, size: 'sm', backdrop : 'static', keyboard : false});
    modalRef.componentInstance.clase = `${this.clase.tipo} ${this.clase.horario}`;
    
    modalRef.componentInstance.formSubmit.subscribe((alumnoNuevo: any) => {
      this.clase.alumnos.push(alumnoNuevo);
    })
  }

  desanotarme(alumno: Alumno) {
    let index = this.clase.alumnos.indexOf(alumno); 

    if (index !== -1) {
      this.clase.alumnos.splice(index, 1);
    }
  }
}
