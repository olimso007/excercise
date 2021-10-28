import { Component, Input, OnInit } from '@angular/core';
import { UserInfo } from '../../post.inteface';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {
  @Input() users: UserInfo[] = [];

  constructor() { }


  ngOnInit(): void {
  }

}
