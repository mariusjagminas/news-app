import { Component, Input, Output, OnInit } from "@angular/core";
import { NewsService } from 'src/app/services/news.service';

@Component({
  selector: "app-header",
  templateUrl: "./header.component.html",
  styleUrls: ["./header.component.scss"]
})
export class HeaderComponent implements OnInit {

  constructor(private newsService: NewsService) { }

  searchKeyword: string = "";
  isMobile: boolean = false;
  categories: Array<string> = [
    "science",
    "sports",
    "lifestyle",
    "health",
    "economy",
    "business"
  ];

  ngOnInit() {
    // setTimeout(() => { this.newsService.fetchNews() }, 2000)
    this.newsService.fetchNews()
    window.onresize = () => {
      this.isMobile = window.innerWidth < 990;
    }
  }

  changeCategory(category: string): void {
    this.newsService.fetchNewsByCategory(category)
  }

  onSubmit(): void {
    this.newsService.fetchNews(this.searchKeyword)
    this.searchKeyword = ""
  }
}
