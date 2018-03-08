import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CallingCodeComponent } from './calling-code.component';

describe('CallingCodeComponent', () => {
  let component: CallingCodeComponent;
  let fixture: ComponentFixture<CallingCodeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CallingCodeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CallingCodeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
