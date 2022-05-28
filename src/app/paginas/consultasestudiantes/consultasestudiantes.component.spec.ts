import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsultasestudiantesComponent } from './consultasestudiantes.component';

describe('ConsultasestudiantesComponent', () => {
  let component: ConsultasestudiantesComponent;
  let fixture: ComponentFixture<ConsultasestudiantesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConsultasestudiantesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ConsultasestudiantesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
