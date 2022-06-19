import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContenedorHistoricoAdminComponent } from './contenedor-historico-admin.component';

describe('ContenedorHistoricoAdminComponent', () => {
  let component: ContenedorHistoricoAdminComponent;
  let fixture: ComponentFixture<ContenedorHistoricoAdminComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ContenedorHistoricoAdminComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ContenedorHistoricoAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
