import { Component, Input, OnChanges, OnInit } from "@angular/core";
import { NewsService } from '../services/news.service';
import { Observable } from 'rxjs/internal/Observable';

@Component({
  selector: "app-news",
  templateUrl: "./news.component.html",
  styleUrls: ["./news.component.scss"]
})
export class NewsComponent implements OnInit {
  constructor(private newsService: NewsService) { }
  news: News[] = [];
  isLoading: boolean;

  ngOnInit(): void {
    this.newsService.getFetchStatus().subscribe(isLoading => this.isLoading = isLoading)
    this.newsService
      .getNews()
      .subscribe(news => this.news = news.slice());
  }
}

export interface News {
  id: string;
  title: string;
  description: string;
  url: string;
  author?: string;
  image?: string;
  language: string;
  category: Array<string>;
  published: string;
}
