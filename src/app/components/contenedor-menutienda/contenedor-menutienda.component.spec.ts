import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContenedorMenutiendaComponent } from './contenedor-menutienda.component';

describe('ContenedorMenutiendaComponent', () => {
  let component: ContenedorMenutiendaComponent;
  let fixture: ComponentFixture<ContenedorMenutiendaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ContenedorMenutiendaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ContenedorMenutiendaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
