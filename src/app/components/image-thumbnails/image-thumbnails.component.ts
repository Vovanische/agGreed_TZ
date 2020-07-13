import { Component } from '@angular/core';

@Component({
  selector: 'app-image-thumbnails',
  templateUrl: './image-thumbnails.component.html',
  styleUrls: ['./image-thumbnails.component.scss']
})
export class ImageThumbnailsComponent {
  params: any;

  agInit(params: any) {
    this.params = params;
  }

}
