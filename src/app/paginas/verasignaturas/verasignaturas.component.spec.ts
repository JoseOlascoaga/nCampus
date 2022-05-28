import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VerasignaturasComponent } from './verasignaturas.component';

describe('VerasignaturasComponent', () => {
  let component: VerasignaturasComponent;
  let fixture: ComponentFixture<VerasignaturasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VerasignaturasComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VerasignaturasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
