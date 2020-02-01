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

  ngOnInit() {
    setTimeout(() => { this.newsService.fetchNews() }, 3000)
    // this.newsService.fetchNews()
  }

  @Input()
  categories: Array<string> = ["news", "programing", "sport"];

  changeCategory(category: string): void {
    console.log(category);
  }

  onClick(): void {
    this.newsService.fetchNews(this.searchKeyword)
    this.searchKeyword = ""
  }
}
