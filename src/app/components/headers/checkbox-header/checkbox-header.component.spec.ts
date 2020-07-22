import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CheckboxHeaderComponent } from './checkbox-header.component';
import { GridApi, IHeaderParams } from 'ag-grid-community';

describe('CheckboxHeaderComponent', () => {
  let component: CheckboxHeaderComponent;
  let fixture: ComponentFixture<CheckboxHeaderComponent>;
  let api: GridApi;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [CheckboxHeaderComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CheckboxHeaderComponent);
    component = fixture.componentInstance;
    api = jasmine.createSpyObj(
      'api',
      ['selectAll', 'deselectAll', 'refreshCells', 'addEventListener', 'removeEventListener',
        'getDisplayedRowCount', 'getSelectedRows']);
    component.agInit({ api } as unknown as IHeaderParams);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('headerCheckboxState should be falsy before changes', () => {
    expect(component.headerCheckboxState).toBeFalsy();
  });

  it('onSelectedStateChange() should call selectAll()', () => {
    component.onSelectedStateChange(true);
    expect(api.selectAll).toHaveBeenCalled();
  });

  it('onSelectedStateChange() should call deselectAll()', () => {
    component.onSelectedStateChange(false);
    expect(api.deselectAll).toHaveBeenCalled();
  });

  it('onSelectedStateChange() should call refreshCells()', () => {
    component.onSelectedStateChange(false);
    expect(api.refreshCells).toHaveBeenCalled();
  });
});
