import { Component, OnInit, Input, OnDestroy } from '@angular/core';
import { RssServiceService } from '../services/rss-service.service';
import { delay } from 'rxjs/operators';
import { Subscription } from 'rxjs';

@Component({
  selector: 'feed-preview',
  templateUrl: './feed-preview.component.html',
  styleUrls: ['./feed-preview.component.css']
})
export class FeedPreviewComponent implements OnInit, OnDestroy {

  @Input() rssUrl: string;
  public feeds;
  public searchParams = '';
  public loading = true;
  private enableCorsProxy = false;
  subscription: Subscription;
  constructor(private rssServiceService: RssServiceService) { }


  ngOnInit(): void {
    this.rssServiceService.setUrl(this.rssUrl);
    this.subscription = this.rssServiceService.getFeed()
      .pipe(delay(500))
      .subscribe(() => {
        this.loading = false;
        this.feeds = this.rssServiceService.feed;
      }
      );
  }

  sendRequest() {
    this.loading = !this.loading;
    this.subscription.unsubscribe();
    this.rssServiceService.getFeed()
      .pipe(delay(500))
      .subscribe(() => {
        this.loading = false;
        this.feeds = this.rssServiceService.feed;
      }
      );
  }

  toggleCorsProxy() {
    this.enableCorsProxy = !this.enableCorsProxy;
    this.rssServiceService.setUrl(
      this.enableCorsProxy ? 'https://cors-anywhere.herokuapp.com/' + this.rssUrl : this.rssUrl
    );
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
