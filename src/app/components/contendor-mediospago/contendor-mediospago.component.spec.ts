import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContendorMediospagoComponent } from './contendor-mediospago.component';

describe('ContendorMediospagoComponent', () => {
  let component: ContendorMediospagoComponent;
  let fixture: ComponentFixture<ContendorMediospagoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ContendorMediospagoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ContendorMediospagoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
