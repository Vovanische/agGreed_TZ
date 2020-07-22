export interface IMainData {
  items: [
    {
      id: {
        videoId: string
      },
      snippet: {
        thumbnails: {
          default: {
            url: string
          }
        },
        publishedAt: string,
        description: string
      }
    }
  ];
}
