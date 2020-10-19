import { Component, OnDestroy } from '@angular/core';
import { ColumnApi, GridApi, IToolPanel, IToolPanelParams } from 'ag-grid-community';
import { CheckboxCol } from '../../../constants/col-definitions/checkbox-column';

@Component({
  selector: 'app-selection-tool-panel',
  templateUrl: './selection-tool-panel.component.html',
  styleUrls: ['./selection-tool-panel.component.scss']
})
export class SelectionToolPanelComponent implements IToolPanel, OnDestroy {

  private gridApi: GridApi;
  private columnApi: ColumnApi;
  public checkboxColumnPropertyHide = CheckboxCol.hide;
  public totalRowCount = 0;
  public selectedRowsCount = 0;

  agInit(params: IToolPanelParams): void {
    this.gridApi = params.api;
    this.columnApi = params.columnApi;
    this.gridApi.addEventListener(
      'modelUpdated',
      this.updateRowsCount);

    this.gridApi.addEventListener(
      'selectionChanged',
      this.updateRowsCount);
  }

  private updateRowsCount = (): void => {
    this.totalRowCount = this.gridApi.getDisplayedRowCount();
    this.selectedRowsCount = this.gridApi.getSelectedRows().length;
  }

  toggleSelectionMode(): void {
    const checkboxColId = CheckboxCol.colId;
    this.checkboxColumnPropertyHide = !this.checkboxColumnPropertyHide;
    this.columnApi.setColumnVisible(checkboxColId, !this.checkboxColumnPropertyHide);
    this.gridApi.deselectAll();
  }

  refresh(): boolean {
    return false;
  }

  ngOnDestroy(): void {
    this.gridApi.removeEventListener(
      'modelUpdated',
      this.updateRowsCount);

    this.gridApi.removeEventListener(
      'selectionChanged',
      this.updateRowsCount);
  }

}
