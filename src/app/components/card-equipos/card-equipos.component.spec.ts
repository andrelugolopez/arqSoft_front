import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardEquiposComponent } from './card-equipos.component';

describe('CardEquiposComponent', () => {
  let component: CardEquiposComponent;
  let fixture: ComponentFixture<CardEquiposComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CardEquiposComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CardEquiposComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
