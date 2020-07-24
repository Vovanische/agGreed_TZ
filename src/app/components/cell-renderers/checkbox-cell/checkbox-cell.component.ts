import { Component, OnDestroy } from '@angular/core';
import { GridApi, ICellRendererParams, RowNode } from 'ag-grid-community';
import { ICellRendererAngularComp } from 'ag-grid-angular';

@Component({
  selector: 'app-checkbox-cell',
  templateUrl: './checkbox-cell.component.html',
  styleUrls: ['./checkbox-cell.component.scss']
})
export class CheckboxCellComponent implements ICellRendererAngularComp, OnDestroy {

  private api: GridApi;
  private node: RowNode;
  public rowCheckboxState = false;

  agInit(params: ICellRendererParams): void {
    this.api = params.api;
    this.node = params.node;
    this.api.addEventListener('selectionChanged',
      this.checkRowSelection);
  }

  private checkRowSelection = (): void => {
    this.rowCheckboxState = this.node.isSelected();
  }

  onRowCheckboxStateChange(checkboxState: boolean): void {
    this.node.setSelected(checkboxState);
  }

  refresh(): boolean {
    return false;
  }

  ngOnDestroy(): void {
    this.api.removeEventListener('selectionChanged', this.checkRowSelection);
  }

}
