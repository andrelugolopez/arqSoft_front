import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardArticulostiendaComponent } from './card-articulostienda.component';

describe('CardArticulostiendaComponent', () => {
  let component: CardArticulostiendaComponent;
  let fixture: ComponentFixture<CardArticulostiendaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CardArticulostiendaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CardArticulostiendaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
