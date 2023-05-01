import { Component } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'gym-anotarse-modal',
  templateUrl: './anotarse-modal.component.html',
  styleUrls: ['./anotarse-modal.component.scss']
})
export class AnotarseModalComponent {
  
  constructor(
    public activeModal: NgbActiveModal
  ) {}

  cerrar(): void {
    this.activeModal.close();
  }

}
