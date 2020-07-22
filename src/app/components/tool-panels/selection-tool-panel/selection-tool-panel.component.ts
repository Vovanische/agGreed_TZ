import { Component, OnDestroy, OnInit } from '@angular/core';
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
  private checkboxColumnPropertyHide: boolean;
  public totalRowCount: number;
  public selectedRowsCount: number;

  agInit(params: IToolPanelParams): void {
    this.gridApi = params.api;
    this.columnAPi = params.columnApi;

    this.gridApi.addEventListener(
      'gridReady',
      this.getValueOfPropertyHide);

    this.gridApi.addEventListener(
      'modelUpdated',
      this.updateRowsCount);

    this.gridApi.addEventListener(
      'selectionChanged',
      this.updateRowsCount);
  }

  updateRowsCount = (): void => {
    this.totalRowCount = this.gridApi.getDisplayedRowCount();
    this.selectedRowsCount = this.gridApi.getSelectedRows().length;
  }

  getValueOfPropertyHide = (): void => {
    const checkboxColId = CheckboxCol.colId;
    this.checkboxColumnPropertyHide = this.gridApi.getColumnDef(checkboxColId).hide;
  }

  switchSelectionMode(): void {
    const checkboxColId = CheckboxCol.colId;
    this.checkboxColumnPropertyHide = !this.checkboxColumnPropertyHide;
    this.columnAPi.setColumnVisible(checkboxColId, !this.checkboxColumnPropertyHide);
    this.gridApi.deselectAll();
  }

  refresh(): boolean {
    return false;
  }

  ngOnDestroy(): void {
    this.gridApi.removeEventListener(
      'gridReady',
      this.getValueOfPropertyHide
    );
    this.gridApi.removeEventListener(
      'modelUpdated',
      this.updateRowsCount);

    this.gridApi.removeEventListener(
      'selectionChanged',
      this.updateRowsCount);
  }

}
