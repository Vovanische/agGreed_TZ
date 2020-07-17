import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TestGridComponent } from './test-grid.component';
import { AgGridModule } from 'ag-grid-angular';
import { HttpClientTestingModule } from '@angular/common/http/testing';

import { ImageThumbnailsComponent } from '../image-thumbnails/image-thumbnails.component';
import { VideoTitleComponent } from '../video-title/video-title.component';
import { CheckboxHeaderComponent } from '../checkbox-header/checkbox-header.component';
import { SelectionToolPanelComponent } from '../selection-tool-panel/selection-tool-panel.component';
import { CheckboxCellComponent } from '../checkbox-cell/checkbox-cell.component';
import { LinkService } from '../../services/link.service';

describe('TestGridComponent', () => {
  let component: TestGridComponent;
  let fixture: ComponentFixture<TestGridComponent>;
  let linkServiceSpyObject: jasmine.SpyObj<any>;
  let linkService: LinkService;
  let linkServiceSpy: jasmine.Spy;


  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        TestGridComponent,
        ImageThumbnailsComponent,
        VideoTitleComponent,
        CheckboxHeaderComponent,
        SelectionToolPanelComponent,
        CheckboxCellComponent
      ],
      imports: [
        HttpClientTestingModule,
        AgGridModule.withComponents([
          ImageThumbnailsComponent,
          VideoTitleComponent,
          CheckboxHeaderComponent,
          SelectionToolPanelComponent,
          CheckboxCellComponent])
      ],
      providers: [
        LinkService
      ]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TestGridComponent);
    component = fixture.componentInstance;
    linkServiceSpyObject = jasmine.createSpyObj('LinkService',
      { openInNewTab: 'Opening is successful' });
    linkService = fixture.debugElement.injector.get(LinkService);
    linkServiceSpy = spyOn(linkService, 'openInNewTab');
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
