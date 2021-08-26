import { Component, EventEmitter, Input, OnInit, Output, OnChanges } from '@angular/core';
import { Pagination } from '../post.inteface';

@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.css']
})
export class PaginationComponent implements OnInit, OnChanges {
  @Input() paginationInfo: Pagination | null = null;
  @Output() page = new EventEmitter<number>();
  pageNum: number = 1;

  constructor() { }

  loadFirstPage() {
    if (this.paginationInfo != null) {
      // var btn = document.getElementById("first")
      // if (this.pageNum == 1) {
      //   btn?.setAttribute('disabled', 'disabled');
      // }
      let link: string = this.paginationInfo.links.current;
      this.pageNum = 1;
      this.page.emit(1);
    }
  }

  loadPreviousPage() {
    if (this.paginationInfo != null) {
      this.pageNum -= 1;
      this.page.emit(this.pageNum);
    }
  }

  loadNextPage() {
    if (this.paginationInfo != null) {
      this.pageNum += 1;
      this.page.emit(this.pageNum);
    }
  }

  loadLastPage() {
    if (this.paginationInfo != null) {
      this.pageNum = this.paginationInfo.pages;
      let link: string = this.paginationInfo.links.current;
      this.page.emit(this.pageNum);
    }
  }

  ngOnChanges() {

  }

  ngOnInit(): void {
  }

}
