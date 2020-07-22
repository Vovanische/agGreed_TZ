import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectionToolPanelComponent } from './selection-tool-panel.component';
import { ColumnApi, GridApi, IToolPanelParams } from 'ag-grid-community';
import { CheckboxCol } from '../../../constants/col-definitions/checkbox-column';

describe('SelectionToolPanelComponent', () => {
  let component: SelectionToolPanelComponent;
  let fixture: ComponentFixture<SelectionToolPanelComponent>;
  let api: GridApi;
  let columnApi: ColumnApi;
  const checkboxCol = CheckboxCol;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [SelectionToolPanelComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SelectionToolPanelComponent);
    component = fixture.componentInstance;
    api = jasmine.createSpyObj('api', {
      getDisplayedRowCount: 50,
      getSelectedRows: [],
      getColumnDef: { hide: false },
      addEventListener: '',
      removeEventListener: '',
      deselectAll: ''
    });
    columnApi = jasmine.createSpyObj('columnApi', ['setColumnVisible']);
    component.agInit({ api, columnApi } as unknown as IToolPanelParams);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('totalRowCount should be falsy before changes', () => {
    expect(component.totalRowCount).toBeFalsy();
  });

  it('selectedRowsCount should be falsy before changes', () => {
    expect(component.selectedRowsCount).toBeFalsy();
  });

  it('setColumnVisible() should called with right arguments', () => {
    component.getValueOfPropertyHide();
    component.switchSelectionMode();
    expect(columnApi.setColumnVisible).toHaveBeenCalledWith(checkboxCol.colId, false);
  });

});
