import { Component } from '@angular/core';
import { ICellRendererParams } from 'ag-grid-community';
import { ICellRendererAngularComp } from 'ag-grid-angular';

@Component({
  selector: 'app-image-thumbnails',
  templateUrl: './image-thumbnails.component.html',
  styleUrls: ['./image-thumbnails.component.scss']
})
export class ImageThumbnailsComponent implements ICellRendererAngularComp {
  params: ICellRendererParams;

  get imageSource(): string {
    return this.params && this.params.value;
  }

  agInit(params: ICellRendererParams): void {
    this.params = params;
  }

  refresh(): boolean {
    return false;
  }
}
