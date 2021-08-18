import { Component, OnInit } from '@angular/core';
import { Post } from "./post.inteface";
import { ApiService } from "./api.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'excercise';
  posts: Post[] = [];

  constructor(
    private apiService: ApiService,
  ) {
  }

  loadPosts() {
    this.apiService.getPosts().subscribe((responce)=>this.posts=responce);
  };

  ngOnInit(): void {
  }
}
