import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContenedorAsistenciatenicadminComponent } from './contenedor-asistenciatenicadmin.component';

describe('ContenedorAsistenciatenicadminComponent', () => {
  let component: ContenedorAsistenciatenicadminComponent;
  let fixture: ComponentFixture<ContenedorAsistenciatenicadminComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ContenedorAsistenciatenicadminComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ContenedorAsistenciatenicadminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
