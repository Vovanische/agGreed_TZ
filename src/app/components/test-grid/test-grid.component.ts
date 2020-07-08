import { Component, OnInit } from '@angular/core';
import { GridDataService } from '../../services/grid-data.service';

@Component({
  selector: 'app-test-grid',
  templateUrl: './test-grid.component.html',
  styleUrls: ['./test-grid.component.scss']
})
export class TestGridComponent implements OnInit {

  columnDefs = [
    { headerName: 'Thumbnails', field: 'thumbnails' },
    { headerName: 'PublishedAt', field: 'publishedAt' },
    { headerName: 'Title', field: 'title' },
    { headerName: 'Description', field: 'description' }
  ];

  rowData: any;

  constructor(private gridData: GridDataService) { }

  ngOnInit() {
    console.log('OnInit');
    this.rowData = this.gridData.getRows();
    // this.gridData.getRows();
  }

}
