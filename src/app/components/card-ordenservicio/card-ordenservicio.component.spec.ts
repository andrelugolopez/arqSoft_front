import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardOrdenservicioComponent } from './card-ordenservicio.component';

describe('CardOrdenservicioComponent', () => {
  let component: CardOrdenservicioComponent;
  let fixture: ComponentFixture<CardOrdenservicioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CardOrdenservicioComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CardOrdenservicioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
