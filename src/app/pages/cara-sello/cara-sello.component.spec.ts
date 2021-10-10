import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CaraSelloComponent } from './cara-sello.component';

describe('CaraSelloComponent', () => {
  let component: CaraSelloComponent;
  let fixture: ComponentFixture<CaraSelloComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CaraSelloComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CaraSelloComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
