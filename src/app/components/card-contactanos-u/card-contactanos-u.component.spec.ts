import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardContactanosUComponent } from './card-contactanos-u.component';

describe('CardContactanosUComponent', () => {
  let component: CardContactanosUComponent;
  let fixture: ComponentFixture<CardContactanosUComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CardContactanosUComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CardContactanosUComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
