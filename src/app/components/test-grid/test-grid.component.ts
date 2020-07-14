import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { AllModules } from '@ag-grid-enterprise/all-modules/dist/ag-grid-enterprise.js';

import { GridDataService } from '../../services/grid-data.service';
import { DataParserService } from '../../services/data-parser.service';
import { ImageThumbnailsComponent } from '../image-thumbnails/image-thumbnails.component';
import { VideoTitleComponent } from '../video-title/video-title.component';
import { CheckboxHeaderComponent } from '../checkbox-header/checkbox-header.component';
import { SelectionToolPanelComponent } from '../selection-tool-panel/selection-tool-panel.component';
import { MenuItemDef } from 'ag-grid-community';
import { CheckboxCellComponent } from '../checkbox-cell/checkbox-cell.component';

@Component({
  selector: 'app-test-grid',
  templateUrl: './test-grid.component.html',
  styleUrls: ['./test-grid.component.scss']
})
export class TestGridComponent implements OnInit, OnDestroy {

  constructor(private gridData: GridDataService, private dataParser: DataParserService) { }

  private subscription = new Subscription();
  private gridApi;
  private gridColumnApi;
  private rowSelection = 'multiple';
  private modules = AllModules;

  // private columnDefs;
  // private defaultColDef;
  // private sideBar: SideBarDef;
  // private rowData: [];
  // private modules: Module[] = [
  //   SideBarDef,
  //   ToolPanelDef
  // ] ;

  private rowData: any;
  private columnDefs = [
    {
      field: 'checkbox',
      headerComponentFramework: CheckboxHeaderComponent,
      sortable: false,
      maxWidth: 40,
      cellRendererFramework: CheckboxCellComponent,
      hide: true
    },
    {
      headerName: '',
      field: 'thumbnails',
      minWidth: 70,
      maxWidth: 70,
      sortable: false,
      cellRendererFramework: ImageThumbnailsComponent
    },
    {
      headerName: 'Published on',
      field: 'publishedAt',
      enableValue: true,
      maxWidth: 180
    },
    {
      headerName: 'Video Title',
      field: 'title',
      maxWidth: 200,
      cellRendererFramework: VideoTitleComponent
    },
    {
      headerName: 'Description',
      field: 'description'
    }
  ];
  private defaultColDef = {
    flex: true,
    minWidth: 70,
    sortable: true,
    autoHeight: true,
    enableValue: true,
    enableRowGroup: true,
    enablePivot: true
  };

  private sideBar = {
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
  private frameworkComponents = { selectionToolPanel: SelectionToolPanelComponent };

  getContextMenuItems(params) {
    const result: Array<string | MenuItemDef> = [
      'copy',
      'copyWithHeaders',
      'paste'
    ];
    const openInNewTabFeature: MenuItemDef = {
      name: 'Open in new tab',
      action: () => {
        window.open(params.value);
      }
    };
    if (params.column.userProvidedColDef.field === 'title') {
      result.push(openInNewTabFeature);
    }
    return result;
  }

  onGridReady(params) {
    this.gridApi = params.api;
    this.gridColumnApi = params.columnApi;
  }

  ngOnInit() {
    console.log('OnInit');
    const rowDataSubscription = this.gridData.getData().pipe(
      catchError(error => {
        console.log('Error', error);
        return throwError(error);
      })
    ).subscribe((sourceData) => {
      console.log(sourceData);
      console.log(this.dataParser.createRows(sourceData));
      this.rowData = this.dataParser.createRows(sourceData);
    });
    this.subscription.add(rowDataSubscription);
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
