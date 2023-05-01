import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AnotarseModalComponent } from './anotarse-modal.component';

describe('AnotarseModalComponent', () => {
  let component: AnotarseModalComponent;
  let fixture: ComponentFixture<AnotarseModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AnotarseModalComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AnotarseModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
