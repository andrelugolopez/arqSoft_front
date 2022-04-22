import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContenedorIndexComponent } from './contenedor-index.component';

describe('ContenedorIndexComponent', () => {
  let component: ContenedorIndexComponent;
  let fixture: ComponentFixture<ContenedorIndexComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ContenedorIndexComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ContenedorIndexComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
