import { Component } from '@angular/core';
import { NewsService } from "./rest_service/news.service";
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [NewsService, HttpClient]
})
export class AppComponent {
  title = 'planetNews';
  news;

  constructor(private newsService: NewsService) {
      this.news = newsService.getNews();
   }
}
