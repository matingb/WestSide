import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';
import { Dia } from './models/dia.model';
import { ClassDetailsComponent } from './components/class-details/class-details.component';
import { Clase } from './models/clases.model';
import { By } from '@angular/platform-browser';

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
    dadoDiasConClases();
    const fechaMock = new Date(2022, 5, 20); // lunes
    spyOn(Date, 'now').and.returnValue(fechaMock.getTime());
    
    let dia: Dia = component.getDiaDeSemana();

    expect(dia.nombre).toBe("Lunes");
  });

  it('debe mostrar las clases del dia Lunes si el dia actual es lunes', () => {
    component.diaActual = lunes();
    fixture.detectChanges();

    const clases = fixture.debugElement.queryAll(By.css("gym-class-details"));

    expect(clases).toHaveSize(1);
  });

  function dadoDiasConClases() {
    component.dias = [
      lunes(),
      new Dia("Martes", [])
    ];
    fixture.detectChanges();
  }

  function lunes(): Dia {
    return new Dia("Lunes", 
    [
      new Clase("10:00", "Calistenia", [])
    ]) 
  }
});
