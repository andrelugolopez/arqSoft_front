import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FranjaServiciosComponent } from './franja-servicios.component';

describe('FranjaServiciosComponent', () => {
  let component: FranjaServiciosComponent;
  let fixture: ComponentFixture<FranjaServiciosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FranjaServiciosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FranjaServiciosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
