import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { AllModules } from '@ag-grid-enterprise/all-modules/dist/ag-grid-enterprise.js';

import { GridDataService } from '../../../../core/services/grid-data.service';
import { VideoDataModelToViewModelMapperService } from '../../services/video-data-model-to-view-model-mapper.service';
import { GetContextMenuItems, GetContextMenuItemsParams, GridOptions, MenuItemDef, Module } from 'ag-grid-community';
import { LinkService } from '../../../../core/services/link.service';
import { CheckboxCol } from '../../constants/col-definitions/checkbox-column';
import { ThumbnailsCol } from '../../constants/col-definitions/thumbnails-column';
import { PublishedAtCol } from '../../constants/col-definitions/published-at-column';
import { TitleCol } from '../../constants/col-definitions/title-column';
import { DescriptionCol } from '../../constants/col-definitions/description-column';
import { IVideoViewModel } from '../../models/i-video-view-model';
import { SideBar } from '../../constants/side-bar-config';
import { IVideoDataModel } from '../../../../core/models/i-video-data-model';

@Component({
  selector: 'app-video-table',
  templateUrl: './video-table.component.html',
  styleUrls: ['./video-table.component.scss'],
  providers: [VideoDataModelToViewModelMapperService]
})
export class VideoTableComponent implements OnInit, OnDestroy {

  constructor(private gridData: GridDataService,
              private mapDataToRowModel: VideoDataModelToViewModelMapperService,
              private useLink: LinkService) { }

  private subscription = new Subscription();
  public modules: Module[] = AllModules;
  public rowData: IVideoViewModel[];
  public gridOptions: GridOptions = {
    columnDefs: [
      CheckboxCol,
      ThumbnailsCol,
      PublishedAtCol,
      TitleCol,
      DescriptionCol
    ],
    rowSelection: 'multiple',
    sideBar: SideBar,
    defaultColDef: {
      flex: 1,
      minWidth: 70,
      sortable: true,
      autoHeight: true,
      enableValue: true,
      enableRowGroup: true,
      enablePivot: true
    },
    suppressRowClickSelection: true,
    allowContextMenuWithControlKey: true
  };

  getContextMenuItems: GetContextMenuItems =
    (params: GetContextMenuItemsParams): Array<string | MenuItemDef> => {
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
    const rowDataSubscription = this.gridData.getData().pipe(
      catchError(error => {
        console.log('Error', error);
        return throwError(error);
      })
    ).subscribe((sourceData: IVideoDataModel) => {
      this.rowData = this.mapDataToRowModel.map(sourceData);
    });
    this.subscription.add(rowDataSubscription);
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
