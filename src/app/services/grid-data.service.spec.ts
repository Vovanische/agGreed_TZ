import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';

import { GridDataService } from './grid-data.service';
import { LinkConstants } from '../constants/link-constants';
import { IVideoDataModel } from '../models/i-video-data-model';

describe('GridDataService', () => {
  let service: GridDataService;
  let httpTestingController: HttpTestingController;

  beforeEach(() => TestBed.configureTestingModule({
    imports: [HttpClientTestingModule],
    providers: [GridDataService]
  }));

  beforeEach(() => {
    service = TestBed.get(GridDataService);
    httpTestingController = TestBed.get(HttpTestingController);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should have made GET request from expected URL', () => {
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

    service.getData().subscribe((data) => {
      expect(data).toEqual(testData);
    });
    const req = httpTestingController.expectOne(LinkConstants.dataSource);
    expect(req.request.method).toEqual('GET');
    req.flush(testData);
    httpTestingController.verify();
  });

});
