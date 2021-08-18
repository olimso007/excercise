import {Component, Input, OnInit} from '@angular/core';
import { ApiService } from '../api.service'
import { FormBuilder } from '@angular/forms';
import { Post } from '../post.inteface'
import {Observable} from "rxjs";


@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {
  @Input() postsFromServer: Post[] = [];
  newPostForm = this.formBuilder.group({
    id: '', /**Validations**/
    user_id: '',
    title: '',
    body: ''
  });

  constructor(
    private apiService: ApiService,
    private formBuilder: FormBuilder,
  ) {}

  onSubmit(): void {
    /**add newPost to postsFromServer**/
    /**this.newPostForm.getRawValue()**/
    console.warn('Your your data posted', this.newPostForm.value);
    this.newPostForm.reset();
  }

  ngOnInit(): void {
  }

}
