import { TestBed } from '@angular/core/testing';

import { VideoDataModelToViewModelMapperService } from './video-data-model-to-view-model-mapper.service';
import { IRowData } from '../models/i-row-data.';
import { IMainData } from '../models/i-main-data';

describe('DataParserService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: VideoDataModelToViewModelMapperService = TestBed.get(VideoDataModelToViewModelMapperService);
    expect(service).toBeTruthy();
  });

  it('should return correct data', () => {
    const service: VideoDataModelToViewModelMapperService = TestBed.get(VideoDataModelToViewModelMapperService);
    const testData: IMainData = {
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
    expect(service.mapDataToRows(testData)).toEqual(response);
  });

});
