import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContenedorHistoricoComponent } from './contenedor-historico.component';

describe('ContenedorHistoricoComponent', () => {
  let component: ContenedorHistoricoComponent;
  let fixture: ComponentFixture<ContenedorHistoricoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ContenedorHistoricoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ContenedorHistoricoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
