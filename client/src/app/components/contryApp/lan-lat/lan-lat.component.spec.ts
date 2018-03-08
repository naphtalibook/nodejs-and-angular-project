import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LanLatComponent } from './lan-lat.component';

describe('LanLatComponent', () => {
  let component: LanLatComponent;
  let fixture: ComponentFixture<LanLatComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LanLatComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LanLatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
