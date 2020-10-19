import { TestBed } from '@angular/core/testing';

import { VideoDataModelToViewModelMapperService } from './video-data-model-to-view-model-mapper.service';
import { IVideoViewModel } from '../models/i-video-view-model';
import { IVideoDataModel } from '../../../core/models/i-video-data-model';

describe('VideoDataModelToViewModelMapperService', () => {
  beforeEach(() => TestBed.configureTestingModule({
    providers: [VideoDataModelToViewModelMapperService]
  }));

  it('should be created', () => {
    const service: VideoDataModelToViewModelMapperService = TestBed.get(VideoDataModelToViewModelMapperService);
    expect(service).toBeTruthy();
  });

  it('should return correct data', () => {
    const service: VideoDataModelToViewModelMapperService = TestBed.get(VideoDataModelToViewModelMapperService);
    const testData: IVideoDataModel = {
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
    const response: IVideoViewModel[] = [
      {
        thumbnails: 'https://i.ytimg.com/vi/3fumBcKC6RE/default.jpg',
        publishedAt: '2011-05-12T20:01:31Z',
        title: baseLinkPart + '3fumBcKC6RE',
        description: 'Music video by Lil Wayne performing John. (C) 2011 Cash Money Records Inc.'
      }
    ];
    expect(service.map(testData)).toEqual(response);
  });

});
