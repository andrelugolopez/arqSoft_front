import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContenedorAsignacionTecnicoComponent } from './contenedor-asignacion-tecnico.component';

describe('ContenedorAsignacionTecnicoComponent', () => {
  let component: ContenedorAsignacionTecnicoComponent;
  let fixture: ComponentFixture<ContenedorAsignacionTecnicoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ContenedorAsignacionTecnicoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ContenedorAsignacionTecnicoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
