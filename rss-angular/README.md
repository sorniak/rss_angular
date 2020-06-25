# RssAngular

Rss - simple rss reader
Change component's attribute rssUrl ( <feed-preview rssUrl=[rss_feed_link]></feed-preview> ), in order to connect to rss feed. Currently "https://www.gamespot.com/feeds/mashup/" is set.

## Live demo
https://sorniak.github.io/

## TODO list

1. add unit tests
2. add interfaces for http service
3. rework slow xml parser
4. better error handling for http calls
5. cross-browser check (diffrent view on safari\chrome)
6. make better HTML sanitizing
7. update .gitignore, clear repository, no need in node_modules
8. ...

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
