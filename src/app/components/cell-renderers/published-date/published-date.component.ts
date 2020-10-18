import { Component } from '@angular/core';
import { ICellRendererAngularComp } from 'ag-grid-angular';
import { ICellRendererParams } from 'ag-grid-community';

@Component({
  selector: 'app-published-date',
  templateUrl: './published-date.component.html',
  styleUrls: ['./published-date.component.scss']
})
export class PublishedDateComponent implements ICellRendererAngularComp {

  params: ICellRendererParams;

  get publishingDate(): string {
    return this.params && this.params.value;
  }

  agInit(params: ICellRendererParams): void {
    this.params = params;
  }

  refresh(): boolean {
    return false;
  }

}
