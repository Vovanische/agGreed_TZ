import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class GridDataService {

  constructor(private http: HttpClient) { }

  getRows() {
    let data: any;
    this.http.get('https://github.com/Vovanische/agGrid_TZ/blob/master/fetchData.txt').subscribe((httpData) => {
      data = httpData;
      console.log(data);
    });
    return data;
  }
}
