import { Component, OnInit } from '@angular/core';
import { NewsService } from '../services/news.service';

@Component({
  selector: 'app-error-message',
  templateUrl: './error-message.component.html',
  styleUrls: ['./error-message.component.scss']
})
export class ErrorMessageComponent implements OnInit {

  constructor(private newsService: NewsService) { }

  errorMessage?: string;

  ngOnInit() {
    this.newsService.getErrorStatus()
      .subscribe(error => this.selectError(error));
  }

  selectError(error) {
    if (error.name) this.errorMessage = "something went wrong, try again later";
    if (error.name == "TimeoutError") this.errorMessage = "news not found, try using different keywords or select from category";
    if (!error.name) this.errorMessage = null;
  }
}

