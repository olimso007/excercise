import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Post} from "./post.inteface";
import { Observable} from "rxjs";
import { map} from "rxjs/operators"

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) { }

  getPosts(): Observable<Post[]> {
    return this.http.get<any>('https://gorest.co.in/public/v1/posts').pipe(
      map((response)=>response.data)
    );
  }
}
