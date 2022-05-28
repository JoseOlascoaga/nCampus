import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsultsaprofeComponent } from './consultsaprofe.component';

describe('ConsultsaprofeComponent', () => {
  let component: ConsultsaprofeComponent;
  let fixture: ComponentFixture<ConsultsaprofeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConsultsaprofeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ConsultsaprofeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
