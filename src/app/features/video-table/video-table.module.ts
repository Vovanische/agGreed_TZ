import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AgGridModule } from 'ag-grid-angular';
import { ImageThumbnailsComponent } from './components/cell-renderers/image-thumbnails/image-thumbnails.component';
import { VideoTitleComponent } from './components/cell-renderers/video-title/video-title.component';
import { CheckboxHeaderComponent } from './components/headers/checkbox-header/checkbox-header.component';
import { SelectionToolPanelComponent } from './components/tool-panels/selection-tool-panel/selection-tool-panel.component';
import { CheckboxCellComponent } from './components/cell-renderers/checkbox-cell/checkbox-cell.component';
import { PublishedDateComponent } from './components/cell-renderers/published-date/published-date.component';
import { VideoTableComponent } from './components/video-table/video-table.component';
import { VideoTableRoutingModule } from './video-table-routing.module';


@NgModule({
  declarations: [
    VideoTableComponent,
    ImageThumbnailsComponent,
    VideoTitleComponent,
    CheckboxHeaderComponent,
    SelectionToolPanelComponent,
    CheckboxCellComponent,
    PublishedDateComponent
  ],
  imports: [
    CommonModule,
    VideoTableRoutingModule,
    AgGridModule.withComponents([
      ImageThumbnailsComponent,
      VideoTitleComponent,
      CheckboxHeaderComponent,
      SelectionToolPanelComponent,
      CheckboxCellComponent,
      PublishedDateComponent
    ])
  ]
})
export class VideoTableModule {}
