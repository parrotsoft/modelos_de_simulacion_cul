import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ActividadCaraSelloComponent } from './actividad-cara-sello.component';

describe('ActividadCaraSelloComponent', () => {
  let component: ActividadCaraSelloComponent;
  let fixture: ComponentFixture<ActividadCaraSelloComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ActividadCaraSelloComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ActividadCaraSelloComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
