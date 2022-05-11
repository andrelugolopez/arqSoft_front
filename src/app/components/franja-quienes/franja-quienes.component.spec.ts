import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FranjaQuienesComponent } from './franja-quienes.component';

describe('FranjaQuienesComponent', () => {
  let component: FranjaQuienesComponent;
  let fixture: ComponentFixture<FranjaQuienesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FranjaQuienesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FranjaQuienesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
