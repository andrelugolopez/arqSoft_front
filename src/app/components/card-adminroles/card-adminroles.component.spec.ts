import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardAdminrolesComponent } from './card-adminroles.component';

describe('CardAdminrolesComponent', () => {
  let component: CardAdminrolesComponent;
  let fixture: ComponentFixture<CardAdminrolesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CardAdminrolesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CardAdminrolesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
