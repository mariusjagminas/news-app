import { Injectable } from '@angular/core';
import { HttpClient, HttpParams, HttpErrorResponse } from '@angular/common/http';
import { Observable, Subject, BehaviorSubject } from 'rxjs';
import { timeout } from 'rxjs/operators'
import { environment } from '../../environments/environment';
import { News } from '../news/news.component';

@Injectable()
export class NewsService {

  constructor(private http: HttpClient) { }

  private newsSubject = new Subject<any>();
  private loadingSubject = new BehaviorSubject<boolean>(true);
  private errorSubject = new BehaviorSubject<object>({});

  apiKey = environment.apiKey;
  baseUrl: string = 'https://api.currentsapi.services/v1';
  path: string = "/search";
  // url: string = this.baseUrl + this.path;
  url: string = '/assets/fake-data.json'
  httpParams = new HttpParams().set("apiKey", this.apiKey)

  getNews(): Observable<News[]> {
    return this.newsSubject;
  }

  getFetchStatus(): Observable<any> {
    return this.loadingSubject
  }

  getErrorStatus(): Observable<any> {
    return this.errorSubject
  }

  handleFetchSuccess(data: any): void {
    const news = this.addDefaultImage(data.news)

    this.errorSubject.next({})
    this.loadingSubject.next(false)
    this.newsSubject.next(news);
  }

  handleError(error: HttpErrorResponse): void {
    this.newsSubject.next([]);
    this.loadingSubject.next(false);
    this.errorSubject.next(error);
  }

  fetchNews(searchKeyword: string = ""): void {
    this.fetch("keywords", searchKeyword)
  }

  fetchNewsByCategory(category: string) {
    this.fetch("category", category)
  }

  fetch(name: string, value: string) {
    this.newsSubject.next([]);
    this.errorSubject.next({});
    this.loadingSubject.next(true);

    const params = this.httpParams.set(name, value);

    this.http.get(this.url, { params })
      .pipe(timeout(10000))
      .subscribe((data?: any) => this.handleFetchSuccess(data),
        (error: HttpErrorResponse) => {
          this.handleError(error)
        })
  }

  addDefaultImage(news: News[]) {
    news.forEach(post => {
      if (post.image === "None")
        post.image = "https://picsum.photos/600/400"
    })
    return news
  }
}




