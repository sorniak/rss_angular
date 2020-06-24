import { Component, OnInit, Input } from '@angular/core';
import { RssServiceService } from '../services/rss-service.service';
import { catchError, delay, debounce } from 'rxjs/operators';
import { interval, Subscription } from 'rxjs';

@Component({
  selector: 'feed-preview',
  templateUrl: './feed-preview.component.html',
  styleUrls: ['./feed-preview.component.css']
})
export class FeedPreviewComponent implements OnInit {

  @Input() rssUrl: string;
  public feeds;
  public searchParams = '';
  public loading = true;
  subscription: Subscription;
  constructor( private rssServiceService: RssServiceService) { }


  ngOnInit(): void {
    this.rssServiceService.setUrl(this.rssUrl);
    this.subscription = this.rssServiceService.getFeed()
      .pipe(delay(500))
      .subscribe(() =>{
        this.loading = false;
        this.feeds = this.rssServiceService.feed;
      }
        // data => console.log('data?', data),
        // error => console.log('oops', error)
      );
    //this.feeds = this.rssServiceService.feed
    //var arr = [].slice.call(htmlCollection);
    console.log(this.feeds);
    // console.log(xmlDoc.getElementsByTagName("channel")[0].parentNode.nodeName)
  }

  sendRequest(){
    // this.loading = !this.loading;
    this.subscription.unsubscribe();
    this.rssServiceService.getFeed()
    .pipe(delay(500))
    .subscribe(() =>{
      this.loading = false;
      this.feeds = this.rssServiceService.feed;
      console.log(this.rssServiceService.feed);
    }
      // data => console.log('data?', data),
      // error => console.log('oops', error)
    );
  }

  enableCorsProxy(){
    this.rssServiceService.setUrl('https://cors-anywhere.herokuapp.com/' + this.rssUrl);
    console.log(this.rssServiceService.rssUrl)
  }
}
