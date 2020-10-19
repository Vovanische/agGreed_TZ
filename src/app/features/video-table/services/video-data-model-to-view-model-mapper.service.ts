import { Injectable } from '@angular/core';
import { IVideoViewModel } from '../models/i-video-view-model';
import { LinkConstants } from '../constants/link-constants';
import { IVideoDataModel } from '../../../core/models/i-video-data-model';


@Injectable()

export class VideoDataModelToViewModelMapperService {

  map(data: IVideoDataModel): IVideoViewModel[] {
    return data.items.map((item) => {
      return {
        thumbnails: item.snippet.thumbnails.default.url,
        publishedAt: item.snippet.publishedAt,
        title: LinkConstants.baseVideoPart + item.id.videoId,
        description: item.snippet.description
      };
    });
  }
}
