import { Injectable } from '@angular/core';
import { IRowData } from '../models/i-row-data.';

@Injectable({
  providedIn: 'root'
})
export class MapDataToRowModelService {

  createRows(data): IRowData[] {
    const rowsArray = [];
    const baseLinkPart = 'https://www.youtube.com/watch?v=';
    data.items.forEach((item) => {
      const row: IRowData = {
        thumbnails: item.snippet.thumbnails.default.url,
        publishedAt: item.snippet.publishedAt,
        title: baseLinkPart + item.id.videoId,
        description: item.snippet.description
      };
      rowsArray.push(row);
    });
    return rowsArray;
  }
}
