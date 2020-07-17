import { Component } from '@angular/core';
import { ICellRendererParams } from 'ag-grid-community';

@Component({
  selector: 'app-video-title',
  templateUrl: './video-title.component.html',
  styleUrls: ['./video-title.component.scss']
})
export class VideoTitleComponent {
  params: ICellRendererParams;

  get value(): string {
    return this.params && this.params.value;
  }

  agInit(params: ICellRendererParams): void {
    this.params = params;
  }

}
