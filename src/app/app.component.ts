import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  columnDefs = [
    { headerName: 'Thumbnails', field: 'thumbnails' },
    { headerName: 'PublishedAt', field: 'publishedAt' },
    { headerName: 'Title', field: 'title' },
    { headerName: 'Description', field: 'description' }
  ];

  rowData: any;

  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.rowData = this.http.get('https://www.googleapis.com/youtube/v3' +
      '/search?key=AIzaSyDOfT_BO81aEZScosfTYMruJobmpjqNeEk&maxResults=50&type=video&part=snippet&q=john/items');
  }


}
