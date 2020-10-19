import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { VideoTableComponent } from './components/video-table/video-table.component';

const videoTableRoutes: Routes = [
  {
    path: '',
    component: VideoTableComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(videoTableRoutes)],
  exports: [RouterModule]
})

export class VideoTableRoutingModule { }
