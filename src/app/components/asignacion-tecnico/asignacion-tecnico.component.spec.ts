import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AsignacionTecnicoComponent } from './asignacion-tecnico.component';

describe('AsignacionTecnicoComponent', () => {
  let component: AsignacionTecnicoComponent;
  let fixture: ComponentFixture<AsignacionTecnicoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AsignacionTecnicoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AsignacionTecnicoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
