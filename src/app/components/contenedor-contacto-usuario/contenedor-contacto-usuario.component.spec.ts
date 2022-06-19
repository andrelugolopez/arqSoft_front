import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContenedorContactoUsuarioComponent } from './contenedor-contacto-usuario.component';

describe('ContenedorContactoUsuarioComponent', () => {
  let component: ContenedorContactoUsuarioComponent;
  let fixture: ComponentFixture<ContenedorContactoUsuarioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ContenedorContactoUsuarioComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ContenedorContactoUsuarioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
