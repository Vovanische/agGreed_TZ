import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LinkService {

  openInNewTab(link: string) {
    return window.open(link);
  }
}
