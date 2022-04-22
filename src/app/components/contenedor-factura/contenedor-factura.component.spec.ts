import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContenedorFacturaComponent } from './contenedor-factura.component';

describe('ContenedorFacturaComponent', () => {
  let component: ContenedorFacturaComponent;
  let fixture: ComponentFixture<ContenedorFacturaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ContenedorFacturaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ContenedorFacturaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
