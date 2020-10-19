import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { VideoTableComponent } from './features/video-table/components/video-table/video-table.component';


const routes: Routes = [
  {
    path: '',
    loadChildren: './features/video-table/video-table.module#VideoTableModule'
  },
  {
    path: '**',
    loadChildren: './features/page-not-found/page-not-found.module#PageNotFoundModule'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
