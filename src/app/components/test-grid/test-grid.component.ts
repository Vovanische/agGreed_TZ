import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { AllModules } from '@ag-grid-enterprise/all-modules/dist/ag-grid-enterprise.js';

import { GridDataService } from '../../services/grid-data.service';
import { DataParserService } from '../../services/data-parser.service';
import { ImageThumbnailsComponent } from '../image-thumbnails/image-thumbnails.component';
import { VideoTitleComponent } from '../video-title/video-title.component';
import { CheckboxHeaderComponent } from '../checkbox-header/checkbox-header.component';

@Component({
  selector: 'app-test-grid',
  templateUrl: './test-grid.component.html',
  styleUrls: ['./test-grid.component.scss']
})
export class TestGridComponent implements OnInit, OnDestroy {
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
      checkboxSelection: true,
      headerCheckboxSelection: true,
      maxWidth: 40
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
      suppressColumnsToolPanel: true,
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
        id: 'columns',
        labelDefault: 'Columns',
        labelKey: 'columns',
        iconKey: 'columns',
        toolPanel: 'agColumnsToolPanel',
        toolPanelParams: {
          suppressRowGroups: true,
          suppressValues: true,
          suppressPivots: true,
          suppressPivotMode: true,
          suppressSideButtons: true,
          suppressColumnFilter: true,
          suppressColumnSelectAll: true,
          suppressColumnExpandAll: true
        }
      },
      {
        id: 'filters',
        labelDefault: 'Filters',
        labelKey: 'filters',
        iconKey: 'filter',
        toolPanel: 'agFiltersToolPanel'
      }
    ]
  };

  getContextMenuItems(params) {
    if (params.column.userProvidedColDef.field === 'title') {
      const result = [
        'copy',
        'copyWithHeaders',
        'paste',
        {
          name: 'Open in new tab',
          action: () => {
            window.open(params.value);
          }
        }
      ];
      return result;
    } else {
      const result = [
        'copy',
        'copyWithHeaders',
        'paste'
      ];
      return result;
    }


  }

  constructor(private gridData: GridDataService, private dataParser: DataParserService) { }

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
