import { Injectable } from '@angular/core';
import { HttpClient, HttpParams, HttpErrorResponse } from '@angular/common/http';
import { Observable, Subject, BehaviorSubject } from 'rxjs';
import { environment } from '../../environments/environment';

@Injectable()
export class NewsService {
  constructor(private http: HttpClient) { }
  private apiKey = environment.apiKey;
  private newsSubject = new Subject<any>();
  private loadingStatusSubject = new BehaviorSubject<boolean>(true);

  baseUrl: string = 'https://api.currentsapi.services/v1';
  path: string = "/search";
  // url: string = this.baseUrl + this.path;
  url: string = '/assets/fake-data.json'
  httpParams = new HttpParams().set("apiKey", this.apiKey)

  getNews(): Observable<any> {
    return this.newsSubject;
  }

  getFetchStatus(): Observable<any> {
    return this.loadingStatusSubject
  }

  handleFetchSuccess(data: any): void {
    this.newsSubject.next(data.news);
    this.loadingStatusSubject.next(false)
  }

  handleError(error: HttpErrorResponse): void {
    console.error("Failed to fetch data", error)
  }

  fetchNews(searchKeyword: string = ""): void {
    this.fetch("keywords", searchKeyword)
  }

  fetchNewsByCategory(category: string) {
    this.fetch("category", category)
  }

  fetch(name: string, value: string) {
    this.loadingStatusSubject.next(true);
    const params = this.httpParams.set(name, value);

    this.http.get(this.url, { params })
      .subscribe((data?: any) => this.handleFetchSuccess(data),
        (error: HttpErrorResponse) => {
          this.handleError(error)
        })
  }
}
