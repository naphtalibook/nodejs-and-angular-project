import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MaxLangComponent } from './max-lang.component';

describe('MaxLangComponent', () => {
  let component: MaxLangComponent;
  let fixture: ComponentFixture<MaxLangComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MaxLangComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MaxLangComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
