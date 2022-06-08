import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardHistoricosComponent } from './card-historicos.component';

describe('CardHistoricosComponent', () => {
  let component: CardHistoricosComponent;
  let fixture: ComponentFixture<CardHistoricosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CardHistoricosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CardHistoricosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
