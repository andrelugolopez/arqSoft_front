import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContenedorCerrarOrdenComponent } from './contenedor-cerrar-orden.component';

describe('ContenedorCerrarOrdenComponent', () => {
  let component: ContenedorCerrarOrdenComponent;
  let fixture: ComponentFixture<ContenedorCerrarOrdenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ContenedorCerrarOrdenComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ContenedorCerrarOrdenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
