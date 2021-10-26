import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import { ApiService } from '../api.service'
import { FormBuilder, Validators } from '@angular/forms';
import { Post } from '../post.inteface'


@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.scss']
})
export class PostsComponent implements OnInit {
  @Input() posts: Post[] = [];
  @Input() idNameMap: Map<number, string> = new Map<number, string>();
  @Output() reloadPage = new EventEmitter<null>();
  newPostForm = this.formBuilder.group({
    id: [''],
    userId: [''],
    title: ['', [Validators.required]],
    body: ['', [Validators.required]]
  });

  constructor(
    private apiService: ApiService,
    private formBuilder: FormBuilder,
  ) {}

  onSubmit(): void {
    const newPost: Post = {
      id: 171,
      user_id: 171,
      title: this.newPostForm.get('title')?.value,
      body: this.newPostForm.get('body')?.value,
    };
    this.apiService.createNewPost(newPost, newPost.id).subscribe();
    window.alert('Your data posted successfully');
    this.newPostForm.reset();
    if (this.posts.length !== 0) {
      this.reloadPage.emit(null);
    }
  }

  ngOnInit(): void {
  }

}
