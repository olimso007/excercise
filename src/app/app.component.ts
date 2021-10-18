import { Component, Input, OnInit } from '@angular/core';
import {Post, Pagination, Posts, User, UserInfo} from './post.inteface';
import { ApiService } from './api.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'excercise';
  posts: Posts | null = null;
  postsFromServer: Post[] = [];
  paginationInfo: Pagination | null = null;
  idNameMap: Map<number, string> = new Map<number, string>();


  constructor(
    private apiService: ApiService,
  ) {
  }

  loadPosts(page: number = 1) {
    this.apiService.getPosts(page).subscribe((response)=>this.posts=response);
    if (this.posts != null) {
      this.posts.data.forEach((post: Post) => {
        if (this.idNameMap.get(post.user_id) == undefined) {
          this.apiService.getUser(post.user_id).subscribe((response) => {
            this.idNameMap.set(post.user_id, response.data.name);
          })
        }
      })
      this.postsFromServer = this.posts.data;
      this.paginationInfo = this.posts.meta.pagination;
    }

  }

  ngOnInit(): void {
  }
}
