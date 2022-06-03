import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContenedorNuevaContrasenaComponent } from './contenedor-nueva-contrasena.component';

describe('ContenedorNuevaContrasenaComponent', () => {
  let component: ContenedorNuevaContrasenaComponent;
  let fixture: ComponentFixture<ContenedorNuevaContrasenaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ContenedorNuevaContrasenaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ContenedorNuevaContrasenaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
