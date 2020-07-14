import { Component } from '@angular/core';
import { IRowData } from '../../models/i-row-data.';
import { ICellRendererParams } from 'ag-grid-community';

@Component({
  selector: 'app-image-thumbnails',
  templateUrl: './image-thumbnails.component.html',
  styleUrls: ['./image-thumbnails.component.scss']
})
export class ImageThumbnailsComponent {
  params: ICellRendererParams;

  agInit(params: ICellRendererParams) {
    this.params = params;
  }

}
