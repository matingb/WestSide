import { Component, EventEmitter, Input, Output } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { Alumno } from 'src/app/models/alumno.model';

@Component({
  selector: 'gym-anotarse-modal',
  templateUrl: './anotarse-modal.component.html',
  styleUrls: ['./anotarse-modal.component.scss']
})
export class AnotarseModalComponent {

  @Input() clase: string = "";
  @Output() formSubmit: EventEmitter<Alumno> = new EventEmitter<Alumno>();

  public alumno: Alumno = new Alumno("");
    
  constructor(
    public activeModal: NgbActiveModal
  ) {}

  cerrar(): void {
    this.activeModal.close();
  }

  anotarse() {
    this.formSubmit.next(this.alumno);
    this.activeModal.close();
  }
}
