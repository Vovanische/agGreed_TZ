import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AgGridModule } from 'ag-grid-angular';
import { HttpClientModule } from '@angular/common/http';
import { TestGridComponent } from './components/test-grid.component';
import { ImageThumbnailsComponent } from './components/cell-renderers/image-thumbnails/image-thumbnails.component';
import { VideoTitleComponent } from './components/cell-renderers/video-title/video-title.component';
import { CheckboxHeaderComponent } from './components/headers/checkbox-header/checkbox-header.component';
import { SelectionToolPanelComponent } from './components/tool-panels/selection-tool-panel/selection-tool-panel.component';
import { CheckboxCellComponent } from './components/cell-renderers/checkbox-cell/checkbox-cell.component';
import { PublishedDateComponent } from './components/cell-renderers/published-date/published-date.component';

@NgModule({
  declarations: [
    AppComponent,
    TestGridComponent,
    ImageThumbnailsComponent,
    VideoTitleComponent,
    CheckboxHeaderComponent,
    SelectionToolPanelComponent,
    CheckboxCellComponent,
    PublishedDateComponent
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
      CheckboxCellComponent,
      PublishedDateComponent
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
