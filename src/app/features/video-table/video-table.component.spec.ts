import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VideoTableComponent } from './video-table.component';
import { AgGridModule } from 'ag-grid-angular';
import { HttpClientTestingModule } from '@angular/common/http/testing';

import { ImageThumbnailsComponent } from './components/cell-renderers/image-thumbnails/image-thumbnails.component';
import { VideoTitleComponent } from './components/cell-renderers/video-title/video-title.component';
import { CheckboxHeaderComponent } from './components/headers/checkbox-header/checkbox-header.component';
import { SelectionToolPanelComponent } from './components/tool-panels/selection-tool-panel/selection-tool-panel.component';
import { CheckboxCellComponent } from './components/cell-renderers/checkbox-cell/checkbox-cell.component';
import { LinkService } from '../../core/services/link.service';
import { Column, GetContextMenuItemsParams, MenuItemDef } from 'ag-grid-community';
import { VideoDataModelToViewModelMapperService } from './services/video-data-model-to-view-model-mapper.service';

describe('VideoTableComponent', () => {
  let component: VideoTableComponent;
  let fixture: ComponentFixture<VideoTableComponent>;
  let linkService: LinkService;
  let column: jasmine.SpyObj<Column>;


  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        VideoTableComponent,
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
        {
          provide: LinkService,
          useValue: jasmine.createSpyObj('LinkService', ['openInNewTab'])
        }
      ]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VideoTableComponent);
    component = fixture.componentInstance;
    linkService = fixture.debugElement.injector.get(LinkService);
    column = jasmine.createSpyObj('column', ['getColId']);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('getContextMenuItems() should return common contextmenu', () => {
    column.getColId.and.returnValue('description');
    const commonResult: Array<string | MenuItemDef> = [
      'copy',
      'copyWithHeaders',
      'paste'];
    expect(component.getContextMenuItems({ column } as unknown as GetContextMenuItemsParams))
      .toEqual(commonResult);
  });

  it('getContextMenuItems() should return contextmenu for title', () => {
    const value = 'https://i.ytimg.com/vi/3fumBcKC6RE/default.jpg';
    column.getColId.and.returnValue('title');
    const getContextMenuItemsCall: Array<string | MenuItemDef> =
      component.getContextMenuItems({ column, value } as unknown as GetContextMenuItemsParams);
    expect(getContextMenuItemsCall.length).toEqual(4);
  });

  it('getContextMenuItems() should call openInMewTab()', () => {
    column.getColId.and.returnValue('title');
    const value = 'https://i.ytimg.com/vi/3fumBcKC6RE/default.jpg';
    const titleContextMenu = component.getContextMenuItems({
      column,
      value
    } as unknown as GetContextMenuItemsParams);
    const openInNewTabTest = titleContextMenu[3] as MenuItemDef;
    openInNewTabTest.action();
    expect(linkService.openInNewTab).toHaveBeenCalledWith(value);
  });
});
