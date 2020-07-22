import { Injectable } from '@angular/core';
import { IRowData } from '../models/i-row-data.';
import { LinkConstants } from '../constants/link-constants';
import { IMainData } from '../models/i-main-data';

@Injectable({
  providedIn: 'root'
})
export class VideoDataModelToViewModelMapperService {

  mapDataToRows(data: IMainData): IRowData[] {
    const rowsArray = [];
    data.items.forEach((item) => {
      const row: IRowData = {
        thumbnails: item.snippet.thumbnails.default.url,
        publishedAt: item.snippet.publishedAt,
        title: LinkConstants.baseVideoPart + item.id.videoId,
        description: item.snippet.description
      };
      rowsArray.push(row);
    });
    return rowsArray;
  }
}
