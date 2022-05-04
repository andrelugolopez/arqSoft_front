import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContenedorLoginComponent } from './contenedor-login.component';

describe('ContenedorLoginComponent', () => {
  let component: ContenedorLoginComponent;
  let fixture: ComponentFixture<ContenedorLoginComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ContenedorLoginComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ContenedorLoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
