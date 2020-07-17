import { Component } from '@angular/core';
import { ICellRendererParams } from 'ag-grid-community';
import { ICellRendererAngularComp } from 'ag-grid-angular';

@Component({
  selector: 'app-checkbox-cell',
  templateUrl: './checkbox-cell.component.html',
  styleUrls: ['./checkbox-cell.component.scss']
})
export class CheckboxCellComponent implements ICellRendererAngularComp {

  private params: ICellRendererParams;
  public rowCheckboxState: boolean;

  agInit(params: ICellRendererParams): void {
    this.params = params;
    this.params.api.addEventListener('selectionChanged',
      this.checkRowSelection.bind(this));
  }

  checkRowSelection(): void {
    this.rowCheckboxState = this.params.node.isSelected();
  }

  onRowCheckboxStateChange(checkboxState: boolean): void {
    if (checkboxState) {
      this.params.node.setSelected(true);
    } else {
      this.params.node.setSelected(false);
    }
  }

  refresh(): boolean {
    return false;
  }
}
