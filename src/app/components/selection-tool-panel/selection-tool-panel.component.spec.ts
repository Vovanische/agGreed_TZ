import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectionToolPanelComponent } from './selection-tool-panel.component';

describe('SelectionToolPanelComponent', () => {
  let component: SelectionToolPanelComponent;
  let fixture: ComponentFixture<SelectionToolPanelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SelectionToolPanelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SelectionToolPanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('refresh() should return false', () => {
    component.refresh();
    expect(component.refresh()).toBe(false);
  });

});
