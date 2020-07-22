import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';

import { GridDataService } from './grid-data.service';

describe('GridDataService', () => {
  beforeEach(() => TestBed.configureTestingModule({
    imports: [HttpClientTestingModule]
  }));

  it('should be created', () => {
    const service: GridDataService = TestBed.get(GridDataService);
    expect(service).toBeTruthy();
  });
});
