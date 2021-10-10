import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ActividadSemaforoComponent } from './actividad-semaforo.component';

describe('ActividadSemaforoComponent', () => {
  let component: ActividadSemaforoComponent;
  let fixture: ComponentFixture<ActividadSemaforoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ActividadSemaforoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ActividadSemaforoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
