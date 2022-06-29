import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContenedorPerfilComponent } from './contenedor-perfil.component';

describe('ContenedorPerfilComponent', () => {
  let component: ContenedorPerfilComponent;
  let fixture: ComponentFixture<ContenedorPerfilComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ContenedorPerfilComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ContenedorPerfilComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
