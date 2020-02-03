import { Component, OnInit } from "@angular/core";
import { NewsService } from '../services/news.service';

@Component({
  selector: "app-news",
  templateUrl: "./news.component.html",
  styleUrls: ["./news.component.scss"]
})
export class NewsComponent implements OnInit {
  constructor(private newsService: NewsService) { }
  news: News[];

  ngOnInit(): void {
    this.newsService
      .getNews()
      .subscribe(news => this.news = news);
  }
}


export interface News {
  id: string;
  title: string;
  description: string;
  url: string;
  author?: string;
  image: string;
  language: string;
  category: Array<string>;
  published: string;
}
