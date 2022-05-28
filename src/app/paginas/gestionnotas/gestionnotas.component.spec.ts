import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GestionnotasComponent } from './gestionnotas.component';

describe('GestionnotasComponent', () => {
  let component: GestionnotasComponent;
  let fixture: ComponentFixture<GestionnotasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GestionnotasComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GestionnotasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
