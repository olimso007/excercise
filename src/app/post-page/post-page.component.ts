import { Component, OnInit } from '@angular/core';
import { Pagination, Post } from '../post.inteface';
import { ApiService } from './api.service';


@Component({
  selector: 'app-post-page',
  templateUrl: './post-page.component.html',
  styleUrls: ['./post-page.component.scss']
})
export class PostPageComponent implements OnInit {
  postsFromServer: Post[] = [];
  paginationInfo: Pagination | null = null;
  idNameMap: Map<number, string> = new Map<number, string>();


  constructor(
    private apiService: ApiService,
  ) {}

  loadPosts(page: number = 1) {
    this.apiService.getPosts(page).subscribe((response) => {
      response.data.forEach((post: Post) => {
        if (this.idNameMap.get(post.user_id) == undefined) {
          this.apiService.getUser(post.user_id).subscribe((response) => {
            this.idNameMap.set(post.user_id, response.data.name);
          });
        }
      });
      this.postsFromServer = response.data;
      this.paginationInfo = response.meta.pagination;
    });

  }

  ngOnInit(): void {
  }

}
