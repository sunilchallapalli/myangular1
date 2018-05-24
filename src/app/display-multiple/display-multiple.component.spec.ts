import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DisplayMultipleComponent } from './display-multiple.component';

describe('DisplayMultipleComponent', () => {
  let component: DisplayMultipleComponent;
  let fixture: ComponentFixture<DisplayMultipleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DisplayMultipleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DisplayMultipleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
