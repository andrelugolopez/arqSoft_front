import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContenedorAsistenciausuarioComponent } from './contenedor-asistenciausuario.component';

describe('ContenedorAsistenciausuarioComponent', () => {
  let component: ContenedorAsistenciausuarioComponent;
  let fixture: ComponentFixture<ContenedorAsistenciausuarioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ContenedorAsistenciausuarioComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ContenedorAsistenciausuarioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
