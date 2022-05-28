import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GestionasistenciaComponent } from './gestionasistencia.component';

describe('GestionasistenciaComponent', () => {
  let component: GestionasistenciaComponent;
  let fixture: ComponentFixture<GestionasistenciaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GestionasistenciaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GestionasistenciaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
