import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContenedorOlvideContrasenaComponent } from './contenedor-olvide-contrasena.component';

describe('ContenedorOlvideContrasenaComponent', () => {
  let component: ContenedorOlvideContrasenaComponent;
  let fixture: ComponentFixture<ContenedorOlvideContrasenaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ContenedorOlvideContrasenaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ContenedorOlvideContrasenaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
