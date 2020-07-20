import { Component } from '@angular/core';
import { GridApi, IHeaderParams } from 'ag-grid-community';

@Component({
  selector: 'app-checkbox-header',
  templateUrl: './checkbox-header.component.html',
  styleUrls: ['./checkbox-header.component.scss']
})
export class CheckboxHeaderComponent {
  params: IHeaderParams;
  public gridApi: GridApi;
  public headerCheckboxState: boolean;

  agInit(params: IHeaderParams): void {
    this.params = params;
    this.gridApi = params.api;
    this.gridApi.addEventListener('selectionChanged',
      this.checkHeaderSelection.bind(this));
  }

  checkHeaderSelection(): void {
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
}
