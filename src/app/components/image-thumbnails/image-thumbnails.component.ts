import { Component } from '@angular/core';
import { ICellRendererParams } from 'ag-grid-community';

@Component({
  selector: 'app-image-thumbnails',
  templateUrl: './image-thumbnails.component.html',
  styleUrls: ['./image-thumbnails.component.scss']
})
export class ImageThumbnailsComponent {
  params: ICellRendererParams;

  get value() {
    return this.params && this.params.value;
  }

  agInit(params: ICellRendererParams): void {
    this.params = params;
  }

}
