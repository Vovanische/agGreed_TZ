import { Injectable } from '@angular/core';
import { forEach } from 'ag-grid-community/dist/lib/utils/array';
import { HttpClient } from '@angular/common/http';
import { Subscription } from 'rxjs';
import { IRowData } from '../models/i-row-data.';

@Injectable({
  providedIn: 'root'
})
export class DataParserService {

  constructor(private http: HttpClient) { }

  createRows(data) {
    const rowsArray = [];
    data.items.forEach((item) => {
      const row: IRowData = {
        thumbnails: item.snippet.thumbnails.default.url,
        publishedAt: item.snippet.publishedAt,
        title: 'https://www.youtube.com/watch?v=' + item.id.videoId,
        description: item.snippet.description
      };
      rowsArray.push(row);
    });

    return rowsArray;
  }
}
