import { TestBed } from '@angular/core/testing';

import { MapDataToRowModelService } from './map-data-to-row-model.service';

describe('DataParserService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: MapDataToRowModelService = TestBed.get(MapDataToRowModelService);
    expect(service).toBeTruthy();
  });
});
