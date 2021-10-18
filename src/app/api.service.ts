import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Post, Posts, User, Users } from './post.inteface';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) { }


  createNewPost(post: Post, id: number): Observable<Post> {
    return this.http.post<Post>('https://gorest.co.in/public/v1/users/'+ id +'/posts',
      post);
  }

  getUser(id: number): Observable<User>{
    return this.http.get<User>('https://gorest.co.in/public/v1/users/' + id);
  }

  getPosts(page: number): Observable<Posts> {
    return this.http.get<Posts>("https://gorest.co.in/public/v1/posts?page=" + page);
  }

}
