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

  constructor() { }

  loadFirstPage() {
    if (this.paginationInfo != null && this.paginationInfo.page != 1) {
      this.page.emit(1);
    }
  }

  loadPreviousPage() {
    if (this.paginationInfo != null && this.paginationInfo.page != 1) {
      this.page.emit(this.paginationInfo.page - 1);
    }
  }

  loadNextPage() {
    if (this.paginationInfo != null && this.paginationInfo.page != this.paginationInfo.pages) {
      this.page.emit(this.paginationInfo.page + 1);
    }
  }

  loadLastPage() {
    if (this.paginationInfo != null  && this.paginationInfo.page != this.paginationInfo.pages) {
      this.page.emit(this.paginationInfo.pages);
    }
  }

  ngOnChanges() {
    var first = document.getElementById("first")
    var previous = document.getElementById("previous")
    var next = document.getElementById("next")
    var last = document.getElementById("last")
    if (this.paginationInfo?.page == 1) {
      first?.setAttribute('disabled', 'disabled');
      previous?.setAttribute('disabled', 'disabled');
    } else {
      first?.removeAttribute('disabled');
      previous?.removeAttribute('disabled');
    }
    if (this.paginationInfo?.page == this.paginationInfo?.pages) {
      next?.setAttribute('disabled', 'disabled');
      last?.setAttribute('disabled', 'disabled');
    } else {
      next?.removeAttribute('disabled');
      last?.removeAttribute('disabled');
    }

  }

  ngOnInit(): void {
  }

}
