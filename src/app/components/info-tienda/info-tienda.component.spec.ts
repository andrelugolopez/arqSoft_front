import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InfoTiendaComponent } from './info-tienda.component';

describe('InfoTiendaComponent', () => {
  let component: InfoTiendaComponent;
  let fixture: ComponentFixture<InfoTiendaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InfoTiendaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InfoTiendaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
