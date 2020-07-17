import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class GridDataService {

  constructor(private http: HttpClient) { }

  getData() {
    // return this.http.get('https://www.googleapis.com/' +
    //    'youtube/v3/search?key=AIzaSyDOfT_BO81aEZScosfTYMru' +
    //    'JobmpjqNeEk&maxResults=50&type=video&part=snippet&q=john');

    return this.http.get('assets/linkData.json');
  }
}
