import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContenedorAdminArticulosComponent } from './contenedor-admin-articulos.component';

describe('ContenedorAdminArticulosComponent', () => {
  let component: ContenedorAdminArticulosComponent;
  let fixture: ComponentFixture<ContenedorAdminArticulosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ContenedorAdminArticulosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ContenedorAdminArticulosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
