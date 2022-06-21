import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContenedorMapaComponent } from './contenedor-mapa.component';

describe('ContenedorMapaComponent', () => {
  let component: ContenedorMapaComponent;
  let fixture: ComponentFixture<ContenedorMapaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ContenedorMapaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ContenedorMapaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
