import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContenedorOrdenServicioComponent } from './contenedor-orden-servicio.component';

describe('ContenedorOrdenServicioComponent', () => {
  let component: ContenedorOrdenServicioComponent;
  let fixture: ComponentFixture<ContenedorOrdenServicioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ContenedorOrdenServicioComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ContenedorOrdenServicioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
