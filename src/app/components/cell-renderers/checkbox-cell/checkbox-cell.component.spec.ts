import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CheckboxCellComponent } from './checkbox-cell.component';
import { GridApi, ICellRendererParams, RowNode } from 'ag-grid-community';

describe('CheckboxCellComponent', () => {
  let component: CheckboxCellComponent;
  let fixture: ComponentFixture<CheckboxCellComponent>;
  let api: GridApi;
  let node: RowNode;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        CheckboxCellComponent
      ]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CheckboxCellComponent);
    component = fixture.componentInstance;
    api = jasmine.createSpyObj('api', ['addEventListener', 'removeEventListener']);
    node = jasmine.createSpyObj('node', ['setSelected', 'isSelected']);
    component.agInit({ api, node } as unknown as ICellRendererParams);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('rowCheckboxState should be false before changes', () => {
    expect(component.rowCheckboxState).toBeFalsy();
  });

  it('setSelected() should call with correct params', () => {
    component.onRowCheckboxStateChange(true);
    expect(node.setSelected).toHaveBeenCalledWith(true);
    component.onRowCheckboxStateChange(false);
    expect(node.setSelected).toHaveBeenCalledWith(false);
  });

});
