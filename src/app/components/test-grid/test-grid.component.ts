import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { AllModules } from '@ag-grid-enterprise/all-modules/dist/ag-grid-enterprise.js';

import { GridDataService } from '../../services/grid-data.service';
import { MapDataToRowModelService } from '../../services/map-data-to-row-model.service';
import { ImageThumbnailsComponent } from '../image-thumbnails/image-thumbnails.component';
import { VideoTitleComponent } from '../video-title/video-title.component';
import { CheckboxHeaderComponent } from '../checkbox-header/checkbox-header.component';
import { SelectionToolPanelComponent } from '../selection-tool-panel/selection-tool-panel.component';
import {
  ColDef,
  GetContextMenuItems,
  GetContextMenuItemsParams,
  GridOptions,
  MenuItemDef, Module,
  SideBarDef
} from 'ag-grid-community';
import { CheckboxCellComponent } from '../checkbox-cell/checkbox-cell.component';
import { LinkService } from '../../services/link.service';

@Component({
  selector: 'app-test-grid',
  templateUrl: './test-grid.component.html',
  styleUrls: ['./test-grid.component.scss']
})
export class TestGridComponent implements OnInit, OnDestroy {

  constructor(private gridData: GridDataService,
              private mapDataToRowModel: MapDataToRowModelService,
              private useLink: LinkService) { }

  private subscription = new Subscription();
  public rowSelection = 'multiple';
  public modules: Module[] = AllModules;
  public rowData: any[];

  public columnDefs: ColDef[] = [
    {
      field: 'checkbox',
      headerComponentFramework: CheckboxHeaderComponent,
      colId: 'checkbox',
      sortable: false,
      maxWidth: 40,
      cellRendererFramework: CheckboxCellComponent
    },
    {
      headerName: '',
      field: 'thumbnails',
      colId: 'thumbnails',
      minWidth: 70,
      maxWidth: 70,
      sortable: false,
      cellRendererFramework: ImageThumbnailsComponent
    },
    {
      headerName: 'Published on',
      field: 'publishedAt',
      colId: 'publishedAt',
      enableValue: true,
      maxWidth: 180
    },
    {
      headerName: 'Video Title',
      field: 'title',
      colId: 'title',
      maxWidth: 200,
      cellRendererFramework: VideoTitleComponent
    },
    {
      headerName: 'Description',
      field: 'description',
      colId: 'title'
    }
  ];
  public defaultColDef: ColDef = {
    flex: 1,
    minWidth: 70,
    sortable: true,
    autoHeight: true,
    enableValue: true,
    enableRowGroup: true,
    enablePivot: true
  };

  public sideBar: SideBarDef = {
    toolPanels: [
      {
        id: 'selection',
        labelDefault: 'Selection',
        labelKey: 'selection',
        iconKey: 'selection',
        toolPanel: 'selectionToolPanel'
      }
    ]
  };

  public suppressRowClickSelection = true;
  public allowContextMenuWithControlKey = true;
  public frameworkComponents = { selectionToolPanel: SelectionToolPanelComponent };
  public gridOptions: GridOptions = {
    columnDefs: this.columnDefs,
    rowData: this.rowData,
    rowSelection: this.rowSelection,
    sideBar: this.sideBar,
    defaultColDef: this.defaultColDef,
    suppressRowClickSelection: this.suppressRowClickSelection,
    allowContextMenuWithControlKey: this.allowContextMenuWithControlKey,
    frameworkComponents: this.frameworkComponents
  };

  getContextMenuItems: GetContextMenuItems = (params: GetContextMenuItemsParams): Array<string | MenuItemDef> => {
    const result: Array<string | MenuItemDef> = [
      'copy',
      'copyWithHeaders',
      'paste'
    ];
    if (params.column.getColId() === 'title') {
      const openInNewTabFeature: MenuItemDef = {
        name: 'Open in new tab',
        action: () => {
          this.useLink.openInNewTab(params.value);
        }
      };
      result.push(openInNewTabFeature);
      console.log(params);
      console.log(this.gridOptions);
    }
    return result;
  };

  ngOnInit(): void {
    const rowDataSubscription = this.gridData.getData().pipe(
      catchError(error => {
        console.log('Error', error);
        return throwError(error);
      })
    ).subscribe((sourceData) => {
      this.rowData = this.mapDataToRowModel.createRows(sourceData);
      this.gridOptions.rowData = this.mapDataToRowModel.createRows(sourceData);
      console.log(this.gridOptions.rowData);
    });
    this.subscription.add(rowDataSubscription);
  }


  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
