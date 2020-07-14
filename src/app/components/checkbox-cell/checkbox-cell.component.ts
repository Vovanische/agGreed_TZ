import { Component, OnDestroy, OnInit } from '@angular/core';
import { ICellRendererParams } from 'ag-grid-community';
import { BehaviorSubject, fromEvent, Subscription } from 'rxjs';
import { map, startWith } from 'rxjs/operators';
import { ICellRendererAngularComp } from 'ag-grid-angular';

@Component({
  selector: 'app-checkbox-cell',
  templateUrl: './checkbox-cell.component.html',
  styleUrls: ['./checkbox-cell.component.scss']
})
export class CheckboxCellComponent implements ICellRendererAngularComp, OnDestroy {
  public checkboxState$ = new BehaviorSubject<boolean>(false);

  private params: ICellRendererParams;
  private subscription = new Subscription();

  agInit(params: ICellRendererParams) {
    this.params = params;

    this.subscription.add(
      fromEvent(params.api, 'selectionChanged')
        .pipe(
          map(() => this.params.node.isSelected()),
          startWith(this.params.node.isSelected())
        )
        .subscribe(this.checkboxState$)
    );
  }

  onRowCheckboxStateChange(checkboxState: boolean) {
    if (checkboxState) {
      this.params.node.setSelected(true);
    } else {
      this.params.node.setSelected(false);
    }
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  refresh() {
    return false;
  }
}
