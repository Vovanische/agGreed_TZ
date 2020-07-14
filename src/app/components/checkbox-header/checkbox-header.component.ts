import { Component, OnDestroy, OnInit } from '@angular/core';
import { IHeaderParams } from 'ag-grid-community';
import { BehaviorSubject, fromEvent, Subscription } from 'rxjs';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-checkbox-header',
  templateUrl: './checkbox-header.component.html',
  styleUrls: ['./checkbox-header.component.scss']
})
export class CheckboxHeaderComponent implements OnDestroy {
  public static state$ = new BehaviorSubject<boolean>(false);

  public get checkboxState$() {
    return CheckboxHeaderComponent.state$;
  }

  params: IHeaderParams;
  private subscription = new Subscription();
  private gridApi;

  agInit(params: IHeaderParams) {
    this.params = params;
    this.gridApi = params.api;

    this.subscription.add(
      fromEvent(this.gridApi, 'selectionChanged')
        .pipe(map(() => this.gridApi.getDisplayedRowCount() === this.gridApi.getSelectedRows().length))
        .subscribe(CheckboxHeaderComponent.state$)
    );
  }

  onSelectedStateChange(checkboxState: boolean) {
    if (checkboxState) {
      this.gridApi.selectAll();
    } else {
      this.gridApi.deselectAll();
    }
    this.gridApi.refreshCells();
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

}
