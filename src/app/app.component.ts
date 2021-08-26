import { Component, OnInit } from '@angular/core';
import { Post, Pagination, Posts } from './post.inteface';
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


  constructor(
    private apiService: ApiService,
  ) {
  }

  loadPage(pageUrl: string) {
    this.apiService.getPage(pageUrl).subscribe((response)=>this.posts=response)
    if (this.posts != null){
      this.postsFromServer = this.posts.data;
      this.paginationInfo = this.posts.meta.pagination;
    }
  }

  ngOnInit(): void {
  }
}
