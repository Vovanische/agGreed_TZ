import { TestBed } from '@angular/core/testing';

import { MapDataToRowModelService } from './map-data-to-row-model.service';
import { IRowData } from '../models/i-row-data.';

describe('DataParserService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: MapDataToRowModelService = TestBed.get(MapDataToRowModelService);
    expect(service).toBeTruthy();
  });

  it('should return correct data', () => {
    const service: MapDataToRowModelService = TestBed.get(MapDataToRowModelService);
    const testData = {
      items: [
        {
          id: {
            videoId: '3fumBcKC6RE'
          },
          snippet: {
            thumbnails: {
              default: {
                url: 'https://i.ytimg.com/vi/3fumBcKC6RE/default.jpg'
              }
            },
            publishedAt: '2011-05-12T20:01:31Z',
            description: 'Music video by Lil Wayne performing John. (C) 2011 Cash Money Records Inc.'
          }
        }
      ]
    };

    const baseLinkPart = 'https://www.youtube.com/watch?v=';
    const response: IRowData[] = [
      {
        thumbnails: 'https://i.ytimg.com/vi/3fumBcKC6RE/default.jpg',
        publishedAt: '2011-05-12T20:01:31Z',
        title: baseLinkPart + '3fumBcKC6RE',
        description: 'Music video by Lil Wayne performing John. (C) 2011 Cash Money Records Inc.'
      }
    ];
    expect(service.createRows(testData)).toEqual(response);
  });

});
