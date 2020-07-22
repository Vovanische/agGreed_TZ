import { Component, OnDestroy } from '@angular/core';
import { GridApi, IHeaderParams } from 'ag-grid-community';
import { IHeaderAngularComp } from 'ag-grid-angular';

@Component({
  selector: 'app-checkbox-header',
  templateUrl: './checkbox-header.component.html',
  styleUrls: ['./checkbox-header.component.scss']
})
export class CheckboxHeaderComponent implements IHeaderAngularComp, OnDestroy {
  private gridApi: GridApi;
  public headerCheckboxState: boolean;

  agInit(params: IHeaderParams): void {
    this.gridApi = params.api;
    this.gridApi.addEventListener('selectionChanged',
      this.checkHeaderSelection);
  }

  checkHeaderSelection = (): void => {
    this.headerCheckboxState = (this.gridApi.getDisplayedRowCount() === this.gridApi.getSelectedRows().length);
  }

  onSelectedStateChange(checkboxState: boolean): void {
    if (checkboxState) {
      this.gridApi.selectAll();
    } else {
      this.gridApi.deselectAll();
    }
    this.gridApi.refreshCells();
  }

  ngOnDestroy(): void {
    this.gridApi.removeEventListener('selectionChanged',
      this.checkHeaderSelection);
  }
}
