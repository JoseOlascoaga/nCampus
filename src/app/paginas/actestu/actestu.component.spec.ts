import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ActestuComponent } from './actestu.component';

describe('ActestuComponent', () => {
  let component: ActestuComponent;
  let fixture: ComponentFixture<ActestuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ActestuComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ActestuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
