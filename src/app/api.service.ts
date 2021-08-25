import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Posts } from './post.inteface';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) { }

  getPosts(page: string): Observable<Posts> {
    return this.http.get<Posts>("https://gorest.co.in/public/v1/posts?page=" + page);
  }

  getPage(pageUrl: string): Observable<Posts> {
    return this.http.get<Posts>(pageUrl);
  }
}
