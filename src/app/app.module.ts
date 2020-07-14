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
import { SelectionToolPanelComponent } from './components/selection-tool-panel/selection-tool-panel.component';
import { CheckboxCellComponent } from './components/checkbox-cell/checkbox-cell.component';

@NgModule({
  declarations: [
    AppComponent,
    TestGridComponent,
    ImageThumbnailsComponent,
    VideoTitleComponent,
    CheckboxHeaderComponent,
    SelectionToolPanelComponent,
    CheckboxCellComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    AgGridModule.withComponents([
      ImageThumbnailsComponent,
      VideoTitleComponent,
      CheckboxHeaderComponent,
      SelectionToolPanelComponent,
      CheckboxCellComponent
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
