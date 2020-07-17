import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VideoTitleComponent } from './video-title.component';
import { AgGridModule } from 'ag-grid-angular';
import { TestGridComponent } from '../test-grid/test-grid.component';
import { ImageThumbnailsComponent } from '../image-thumbnails/image-thumbnails.component';
import { CheckboxHeaderComponent } from '../checkbox-header/checkbox-header.component';
import { SelectionToolPanelComponent } from '../selection-tool-panel/selection-tool-panel.component';
import { CheckboxCellComponent } from '../checkbox-cell/checkbox-cell.component';

describe('VideoTitleComponent', () => {
  let component: VideoTitleComponent;
  let fixture: ComponentFixture<VideoTitleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        VideoTitleComponent,
        TestGridComponent,
        ImageThumbnailsComponent,
        CheckboxHeaderComponent,
        SelectionToolPanelComponent,
        CheckboxCellComponent
      ],
      imports: [AgGridModule.withComponents([
        VideoTitleComponent,
        TestGridComponent,
        ImageThumbnailsComponent,
        CheckboxHeaderComponent,
        SelectionToolPanelComponent,
        CheckboxCellComponent
      ])]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VideoTitleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    fixture.detectChanges();
    expect(component).toBeTruthy();
  });
});
