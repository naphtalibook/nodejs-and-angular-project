import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ImgPanelComponent } from './img-panel.component';

describe('ImgPanelComponent', () => {
  let component: ImgPanelComponent;
  let fixture: ComponentFixture<ImgPanelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ImgPanelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ImgPanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
