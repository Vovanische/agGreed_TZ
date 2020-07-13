import { Component, OnInit } from '@angular/core';
import { IHeaderParams } from 'ag-grid-community';

@Component({
  selector: 'app-checkbox-header',
  templateUrl: './checkbox-header.component.html',
  styleUrls: ['./checkbox-header.component.scss']
})
export class CheckboxHeaderComponent {
  params: IHeaderParams;

  agInit(params: IHeaderParams) {
    this.params = params;
  }
}
