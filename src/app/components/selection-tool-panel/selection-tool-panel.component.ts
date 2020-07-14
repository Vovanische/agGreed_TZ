import { Component } from '@angular/core';
import { IToolPanel, IToolPanelParams } from 'ag-grid-community';

@Component({
  selector: 'app-selection-tool-panel',
  templateUrl: './selection-tool-panel.component.html',
  styleUrls: ['./selection-tool-panel.component.scss']
})
export class SelectionToolPanelComponent implements IToolPanel {
  private params: IToolPanelParams;
  public totalRowCount: number;
  public selectedRowsCount: number;
  private checkboxColumnPropertyHide: boolean;

  agInit(params: IToolPanelParams) {
    this.params = params;
    this.totalRowCount = 0;
    this.selectedRowsCount = 0;

    this.params.api.addEventListener(
      'gridReady',
      this.setCheckboxColumnPropertyHide.bind(this)
    );

    this.params.api.addEventListener(
      'modelUpdated',
      this.updateRowsCount.bind(this)
    );

    this.params.api.addEventListener(
      'selectionChanged',
      this.updateRowsCount.bind(this)
    );
}

  updateRowsCount() {
    this.totalRowCount = this.params.api.getDisplayedRowCount();
    this.selectedRowsCount = this.params.api.getSelectedRows().length;
    console.log(this.totalRowCount);
    console.log(this.selectedRowsCount);
  }

  setCheckboxColumnPropertyHide() {
    this.checkboxColumnPropertyHide = this.params.api.getColumnDef('checkbox').hide;
  }

  selectionMode() {
    if (this.checkboxColumnPropertyHide) {
      this.params.columnApi.setColumnVisible('checkbox', true);
      this.checkboxColumnPropertyHide = !this.checkboxColumnPropertyHide;
    } else {
      this.params.columnApi.hideColumn('checkbox', true);
      this.checkboxColumnPropertyHide = !this.checkboxColumnPropertyHide;
      this.params.api.deselectAll();
    }
  }

  refresh() {
    return false;
  }
}
