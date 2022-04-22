import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RedesocialesComponent } from './redesociales.component';

describe('RedesocialesComponent', () => {
  let component: RedesocialesComponent;
  let fixture: ComponentFixture<RedesocialesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RedesocialesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RedesocialesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
