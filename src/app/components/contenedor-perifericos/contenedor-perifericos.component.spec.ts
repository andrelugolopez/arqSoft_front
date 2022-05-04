import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContenedorPerifericosComponent } from './contenedor-perifericos.component';

describe('ContenedorPerifericosComponent', () => {
  let component: ContenedorPerifericosComponent;
  let fixture: ComponentFixture<ContenedorPerifericosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ContenedorPerifericosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ContenedorPerifericosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
