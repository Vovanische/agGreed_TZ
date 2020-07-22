import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { AllModules } from '@ag-grid-enterprise/all-modules/dist/ag-grid-enterprise.js';

import { GridDataService } from '../services/grid-data.service';
import { VideoDataModelToViewModelMapperService } from '../services/video-data-model-to-view-model-mapper.service';
import {
  ColDef, GetContextMenuItems, GetContextMenuItemsParams,
  GridOptions, MenuItemDef, Module, SideBarDef
} from 'ag-grid-community';
import { LinkService } from '../services/link.service';
import { CheckboxCol } from '../constants/col-definitions/checkbox-column';
import { ThumbnailsCol } from '../constants/col-definitions/thumbnails-column';
import { PublishedAtCol } from '../constants/col-definitions/published-at-column';
import { TitleCol } from '../constants/col-definitions/title-column';
import { DescriptionCol } from '../constants/col-definitions/description-column';
import { IRowData } from '../models/i-row-data.';
import { SideBar } from '../constants/side-bar-config';
import { IMainData } from '../models/i-main-data';
import { LinkConstants } from '../constants/link-constants';

@Component({
  selector: 'app-test-grid',
  templateUrl: './test-grid.component.html',
  styleUrls: ['./test-grid.component.scss']
})
export class TestGridComponent implements OnInit, OnDestroy {

  constructor(private gridData: GridDataService,
              private mapDataToRowModel: VideoDataModelToViewModelMapperService,
              private useLink: LinkService) { }

  private subscription = new Subscription();
  public rowSelection = 'multiple';
  public modules: Module[] = AllModules;
  public rowData: IRowData[];

  public columnDefs: ColDef[] = [
    CheckboxCol,
    ThumbnailsCol,
    PublishedAtCol,
    TitleCol,
    DescriptionCol
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

  public sideBar: SideBarDef = SideBar;
  public suppressRowClickSelection = true;
  public allowContextMenuWithControlKey = true;
  public gridOptions: GridOptions = {
    columnDefs: this.columnDefs,
    rowSelection: this.rowSelection,
    sideBar: this.sideBar,
    defaultColDef: this.defaultColDef,
    suppressRowClickSelection: this.suppressRowClickSelection,
    allowContextMenuWithControlKey: this.allowContextMenuWithControlKey
  };

  getContextMenuItems: GetContextMenuItems = (params: GetContextMenuItemsParams): Array<string | MenuItemDef> => {
    const titleColId = TitleCol.colId;
    const result: Array<string | MenuItemDef> = [
      'copy',
      'copyWithHeaders',
      'paste'
    ];
    if (params.column.getColId() === titleColId) {
      const openInNewTabFeature: MenuItemDef = {
        name: 'Open in new tab',
        action: () => {
          this.useLink.openInNewTab(params.value);
        }
      };
      result.push(openInNewTabFeature);
    }
    return result;
  }

  ngOnInit(): void {
    const rowDataSubscription = this.gridData.getData(LinkConstants.dataSource).pipe(
      catchError(error => {
        console.log('Error', error);
        return throwError(error);
      })
    ).subscribe((sourceData: IMainData) => {
      this.rowData = this.mapDataToRowModel.mapDataToRows(sourceData);
    });
    this.subscription.add(rowDataSubscription);
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
