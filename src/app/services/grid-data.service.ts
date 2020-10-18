import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { IVideoDataModel } from '../models/i-video-data-model';
import { LinkConstants } from '../constants/link-constants';

@Injectable({
  providedIn: 'root'
})
export class GridDataService {

  constructor(private http: HttpClient) { }

  getData(): Observable<IVideoDataModel> {
    // return this.http.get<IVideoDataModel>(LinkConstants.dataSource);
    return this.http.get<IVideoDataModel>('../assets/linkData.json');

  }
}
