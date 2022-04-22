import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContenedorCarritoComponent } from './contenedor-carrito.component';

describe('ContenedorCarritoComponent', () => {
  let component: ContenedorCarritoComponent;
  let fixture: ComponentFixture<ContenedorCarritoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ContenedorCarritoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ContenedorCarritoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
