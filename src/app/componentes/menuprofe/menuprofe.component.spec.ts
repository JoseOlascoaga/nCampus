import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MenuprofeComponent } from './menuprofe.component';

describe('MenuprofeComponent', () => {
  let component: MenuprofeComponent;
  let fixture: ComponentFixture<MenuprofeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MenuprofeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MenuprofeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
