import { TestBed } from '@angular/core/testing';

import { GridDataService } from './grid-data.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('GridDataService', () => {
  beforeEach(() => TestBed.configureTestingModule({
    imports: [HttpClientTestingModule]
  }));

  it('should be created', () => {
    const service: GridDataService = TestBed.get(GridDataService);
    expect(service).toBeTruthy();
  });
});
