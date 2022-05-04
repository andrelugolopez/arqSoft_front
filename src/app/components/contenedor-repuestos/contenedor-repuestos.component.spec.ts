import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContenedorRepuestosComponent } from './contenedor-repuestos.component';

describe('ContenedorRepuestosComponent', () => {
  let component: ContenedorRepuestosComponent;
  let fixture: ComponentFixture<ContenedorRepuestosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ContenedorRepuestosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ContenedorRepuestosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
