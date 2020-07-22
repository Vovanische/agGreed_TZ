import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LinkService {

  openInNewTab(link: string): Window | null {
    return window.open(link);
  }
}
