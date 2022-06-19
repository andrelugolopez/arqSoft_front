import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContenedorAdministradorRolComponent } from './contenedor-administrador-rol.component';

describe('ContenedorAdministradorRolComponent', () => {
  let component: ContenedorAdministradorRolComponent;
  let fixture: ComponentFixture<ContenedorAdministradorRolComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ContenedorAdministradorRolComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ContenedorAdministradorRolComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
