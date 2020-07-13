import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-video-title',
  templateUrl: './video-title.component.html',
  styleUrls: ['./video-title.component.scss']
})
export class VideoTitleComponent {
  params: any;

  agInit(params: any) {
    this.params = params;
  }

}
