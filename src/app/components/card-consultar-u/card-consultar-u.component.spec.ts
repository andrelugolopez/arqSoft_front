import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardConsultarUComponent } from './card-consultar-u.component';

describe('CardConsultarUComponent', () => {
  let component: CardConsultarUComponent;
  let fixture: ComponentFixture<CardConsultarUComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CardConsultarUComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CardConsultarUComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
