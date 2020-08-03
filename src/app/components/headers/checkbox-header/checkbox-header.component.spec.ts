import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CheckboxHeaderComponent } from './checkbox-header.component';
import { GridApi, IHeaderParams } from 'ag-grid-community';
import { Publisher } from '../../../tests-supply/publisher';

describe('CheckboxHeaderComponent', () => {
  let component: CheckboxHeaderComponent;
  let fixture: ComponentFixture<CheckboxHeaderComponent>;
  let api: GridApi;
  let params: IHeaderParams;
  let publisher: Publisher;

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
      {
        selectAll: '',
        deselectAll: '',
        refreshCells: '',
        addEventListener: '',
        removeEventListener: '',
        getDisplayedRowCount: 1,
        getSelectedRows: [1]
      });
    publisher = new Publisher();
    api.addEventListener = (eventName, handler: () => void) => publisher.subscribe(eventName, handler);
    params = { api } as unknown as IHeaderParams;
    component.agInit(params);
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

  it('rowCheckboxState should become true on event selectionChanged ', () => {
    publisher.emit('selectionChanged');
    expect(component.headerCheckboxState).toBe(true);
  });

});
