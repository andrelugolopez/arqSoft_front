import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContenedorEquiposComponent } from './contenedor-equipos.component';

describe('ContenedorEquiposComponent', () => {
  let component: ContenedorEquiposComponent;
  let fixture: ComponentFixture<ContenedorEquiposComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ContenedorEquiposComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ContenedorEquiposComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
