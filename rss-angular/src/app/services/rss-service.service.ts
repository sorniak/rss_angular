import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { tap, catchError } from 'rxjs/operators';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class RssServiceService {

  public rssUrl: string;
  public feed: HTMLCollectionOf<Element>;

  constructor(private httpClient: HttpClient) { }

  public setUrl(url: string) {
    this.rssUrl = url;
  }
//'https://cors-anywhere.herokuapp.com/' +
  getFeed() {
    return this.httpClient.get( this.rssUrl, {responseType: 'text'})
      .pipe(tap(
        feed => {
          // console.log(feed);

    const parser = new DOMParser();
    
    // setTimeout(()=> {this.feed = parser.parseFromString(feed,"text/xml")},1000);
    // setTimeout(()=>console.log(this.feed),3000);
          return this.feed = parser.parseFromString(feed,"text/xml").getElementsByTagName('item'); //this.feed = feed;
        })
        ,
        catchError(
          error => of({results: null})
        )
      );
  }
}
