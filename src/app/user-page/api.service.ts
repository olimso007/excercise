import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Post, Posts, User, UserInfo, Users} from '../post.inteface';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) { }


  createNewUser(user: UserInfo): Observable<UserInfo> {
    return this.http.post<UserInfo>(`https://gorest.co.in/public/v1/users`, user);
  }

  getUsers(page: number): Observable<Users> {
    return this.http.get<Users>(`https://gorest.co.in/public/v1/users?page=${page}`);
  }

}
