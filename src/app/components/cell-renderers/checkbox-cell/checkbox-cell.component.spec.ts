import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CheckboxCellComponent } from './checkbox-cell.component';
import { GridApi, ICellRendererParams, RowNode } from 'ag-grid-community';
import { Publisher } from '../../../tests-supply/publisher';

describe('CheckboxCellComponent', () => {
  let component: CheckboxCellComponent;
  let fixture: ComponentFixture<CheckboxCellComponent>;
  let api: GridApi;
  let node: RowNode;
  let params: ICellRendererParams;
  let publisher: Publisher;

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
    api = jasmine.createSpyObj('api', ['removeEventListener']);
    publisher = new Publisher();
    api.addEventListener = (eventName, handler: () => void) => publisher.subscribe(eventName, handler);
    node = jasmine.createSpyObj('node', {
      setSelected: '',
      isSelected: true
    });
    params = { api, node } as unknown as ICellRendererParams;

    component.agInit(params);
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

  it('rowCheckboxState should become true on event selectionChanged ', () => {
    publisher.emit('selectionChanged');
    expect(component.rowCheckboxState).toBe(true);
  });

});
