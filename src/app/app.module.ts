import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AgGridModule } from 'ag-grid-angular';
import { HttpClientModule } from '@angular/common/http';
import { TestGridComponent } from './components/test-grid/test-grid.component';
import { ImageThumbnailsComponent } from './components/image-thumbnails/image-thumbnails.component';
import { VideoTitleComponent } from './components/video-title/video-title.component';
import { CheckboxHeaderComponent } from './components/checkbox-header/checkbox-header.component';

@NgModule({
  declarations: [
    AppComponent,
    TestGridComponent,
    ImageThumbnailsComponent,
    VideoTitleComponent,
    CheckboxHeaderComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    AgGridModule.withComponents([
      ImageThumbnailsComponent,
      VideoTitleComponent,
      CheckboxHeaderComponent
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
