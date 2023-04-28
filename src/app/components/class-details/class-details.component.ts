import { Component, Input } from '@angular/core';
import { Clase } from 'src/app/models/clases.model';

@Component({
  selector: 'gym-class-details',
  templateUrl: './class-details.component.html',
  styleUrls: ['./class-details.component.scss']
})
export class ClassDetailsComponent {

  @Input()
  clase!: Clase;

}
