import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';
import { Dia } from './models/dia.model';
import { ClassDetailsComponent } from './components/class-details/class-details.component';

describe('AppComponent', () => {

  let component: AppComponent;
  let fixture: ComponentFixture<AppComponent>;
  
  beforeEach(async () => {

    await TestBed.configureTestingModule({
      imports: [
        RouterTestingModule
      ],
      declarations: [
        AppComponent,
        ClassDetailsComponent
      ],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AppComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create the app', () => {
    expect(component).toBeTruthy();
  });

  it('debe retornar el Dia Lunes si el dia actual es lunes', () => {
    const fechaMock = new Date(2022, 5, 20); // lunes
    spyOn(Date, 'now').and.returnValue(fechaMock.getTime());
    
    let dia: Dia = component.getDiaDeSemana();

    expect(dia.nombre).toBe("Lunes");
  });
});
