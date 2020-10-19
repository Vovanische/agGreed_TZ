import { Component } from '@angular/core';
import { GridApi, ICellRendererParams, RowNode } from 'ag-grid-community';
import { ICellRendererAngularComp } from 'ag-grid-angular';

@Component({
  selector: 'app-checkbox-cell',
  templateUrl: './checkbox-cell.component.html',
  styleUrls: ['./checkbox-cell.component.scss']
})
export class CheckboxCellComponent implements ICellRendererAngularComp {

  private api: GridApi;
  private node: RowNode;

  agInit(params: ICellRendererParams): void {
    this.api = params.api;
    this.node = params.node;
  }

  public rowCheckboxState = (): boolean => this.node.isSelected();

  onRowCheckboxStateChange(checkboxState: boolean): void {
    this.node.setSelected(checkboxState);
  }

  refresh(): boolean {
    return false;
  }

}
