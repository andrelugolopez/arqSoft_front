import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrincipalesmarcasComponent } from './principalesmarcas.component';

describe('PrincipalesmarcasComponent', () => {
  let component: PrincipalesmarcasComponent;
  let fixture: ComponentFixture<PrincipalesmarcasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PrincipalesmarcasComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PrincipalesmarcasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
