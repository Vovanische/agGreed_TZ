import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';

import { GridDataService } from './grid-data.service';
import { LinkConstants } from '../constants/link-constants';

describe('GridDataService', () => {
  beforeEach(() => TestBed.configureTestingModule({
    imports: [HttpClientTestingModule]
  }));

  it('should be created', () => {
    const service: GridDataService = TestBed.get(GridDataService);
    expect(service).toBeTruthy();
  });

  it('getData() should be called with params', () => {
    const service: GridDataService = TestBed.get(GridDataService);
    service.getData(LinkConstants.dataSource).subscribe(() =>
      expect(service.getData).toHaveBeenCalledWith(LinkConstants.dataSource)
    );
  });

});
