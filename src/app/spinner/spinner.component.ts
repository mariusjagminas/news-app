import { Component, OnInit } from '@angular/core';
import { NewsService } from '../services/news.service';

@Component({
  selector: 'app-spinner',
  templateUrl: './spinner.component.html',
  styleUrls: ['./spinner.component.scss']
})
export class SpinnerComponent implements OnInit {

  constructor(private newsService: NewsService) { }
  isLoading: boolean = false;

  ngOnInit() {
    this.newsService
      .getFetchStatus()
      .subscribe(state => this.isLoading = state)
  }

}
