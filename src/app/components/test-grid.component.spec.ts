import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TestGridComponent } from './test-grid.component';
import { AgGridModule } from 'ag-grid-angular';
import { HttpClientTestingModule } from '@angular/common/http/testing';

import { ImageThumbnailsComponent } from './cell-renderers/image-thumbnails/image-thumbnails.component';
import { VideoTitleComponent } from './cell-renderers/video-title/video-title.component';
import { CheckboxHeaderComponent } from './headers/checkbox-header/checkbox-header.component';
import { SelectionToolPanelComponent } from './tool-panels/selection-tool-panel/selection-tool-panel.component';
import { CheckboxCellComponent } from './cell-renderers/checkbox-cell/checkbox-cell.component';
import { LinkService } from '../services/link.service';
import { Column, GetContextMenuItemsParams, MenuItemDef } from 'ag-grid-community';

describe('TestGridComponent', () => {
  let component: TestGridComponent;
  let fixture: ComponentFixture<TestGridComponent>;
  let linkServiceSpyObject: jasmine.SpyObj<any>;
  let linkService: LinkService;
  let linkServiceSpy: jasmine.Spy;
  let column: jasmine.SpyObj<Column>;


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
      providers: [LinkService]
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
    column = jasmine.createSpyObj('column', ['getColId']);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
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
