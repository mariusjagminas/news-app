import { Component, Input } from "@angular/core";
import { newsData } from "./newsData";

@Component({
  selector: "app-news",
  templateUrl: "./news.component.html",
  styleUrls: ["./news.component.scss"]
})
export class NewsComponent {
  constructor() { }

  @Input()
  news: Array<News> = newsData.news;
}

interface News {
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
