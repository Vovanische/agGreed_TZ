import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GridDataService {

  constructor(private http: HttpClient) { }

  getData(dataSourceLink: string): Observable<object> {
    return this.http.get(dataSourceLink);
  }
}
