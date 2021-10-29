import { Component, OnInit } from '@angular/core';
import { Pagination, UserInfo } from '../../post.inteface';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-user-page',
  templateUrl: './user-page.component.html',
  styleUrls: ['./user-page.component.scss']
})
export class UserPageComponent implements OnInit {

  usersFromServer: UserInfo[] = [];
  paginationInfo: Pagination | null = null;

  constructor(
    private apiService: ApiService,
  ) {
  }

  loadUsers(page: number = 1) {
    this.apiService.getUsers(page).subscribe((response) => {
      this.usersFromServer = response.data;
      this.paginationInfo = response.meta.pagination;
    });
  }



  ngOnInit(): void {
  }


}
