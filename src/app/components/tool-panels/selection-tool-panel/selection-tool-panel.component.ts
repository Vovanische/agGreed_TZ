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
  private columnAPi: ColumnApi;
  public checkboxColumnPropertyHide: boolean = CheckboxCol.hide;
  public totalRowCount: number;
  public selectedRowsCount: number;

  agInit(params: IToolPanelParams): void {
    this.gridApi = params.api;
    this.columnAPi = params.columnApi;
    this.totalRowCount = 0;
    this.selectedRowsCount = 0;
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

  switchSelectionMode(): void {
    const checkboxColId = CheckboxCol.colId;
    this.columnAPi.setColumnVisible(checkboxColId, this.checkboxColumnPropertyHide);
    this.checkboxColumnPropertyHide = !this.checkboxColumnPropertyHide;
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
