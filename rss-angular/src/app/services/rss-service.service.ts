import { Injectable } from '@angular/core';
import { of } from 'rxjs';
import { tap, catchError } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class RssServiceService {

  private rssUrl: string;
  public feed: HTMLCollectionOf<Element>;

  constructor(private httpClient: HttpClient) { }

  public setUrl(url: string) {
    this.rssUrl = url;
  }

  getFeed() {
    return this.httpClient.get(this.rssUrl, { responseType: 'text' })
      .pipe(tap(
        feed => {
          const parser = new DOMParser();
          return this.feed = parser.parseFromString(feed, 'text/xml').getElementsByTagName('item');
        }),
        catchError(
          error => of({ results: null })
        )
      );
  }
}
