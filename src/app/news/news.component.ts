import {Component, OnInit} from '@angular/core';
import {NewsService} from '../news.service';
import {News} from '../news';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.css']
})
export class NewsComponent implements OnInit {
  news: News[];

  constructor(private newsService: NewsService) {
  }

  ngOnInit() {
    this.getNews();
  }

  getNews() {
    this.newsService.getNews()
      .subscribe(news =>
        this.news = news.value
      );
  }
}
