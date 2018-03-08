import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ContryPanelComponent } from './contry-panel.component';

describe('ContryPanelComponent', () => {
  let component: ContryPanelComponent;
  let fixture: ComponentFixture<ContryPanelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ContryPanelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContryPanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
