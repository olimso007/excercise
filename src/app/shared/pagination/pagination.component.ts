import { Component, EventEmitter, Input, OnInit, Output, OnChanges } from '@angular/core';
import { Pagination } from '../../post.inteface';

@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.scss']
})
export class PaginationComponent implements OnInit, OnChanges {
  @Input() paginationInfo: Pagination | null = null;
  @Output() page = new EventEmitter<number>();
  isFirstDisable: boolean = false;
  isLastDisable: boolean = false;
  isPreviousDisable: boolean = false;
  isNextDisable: boolean = false;

  constructor() { }

  loadFirstPage() {
    if (this.paginationInfo !== null && this.paginationInfo.page !== 1) {
      this.page.emit(1);
    }
  }

  loadPreviousPage() {
    if (this.paginationInfo !== null && this.paginationInfo.page !== 1) {
      this.page.emit(this.paginationInfo.page - 1);
    }
  }

  loadNextPage() {
    if (this.paginationInfo !== null && this.paginationInfo.page !== this.paginationInfo.pages) {
      this.page.emit(this.paginationInfo.page + 1);
    }
  }

  loadLastPage() {
    if (this.paginationInfo !== null  && this.paginationInfo.page !== this.paginationInfo.pages) {
      this.page.emit(this.paginationInfo.pages);
    }
  }

  ngOnChanges() {
    this.isFirstDisable = false;
    this.isPreviousDisable = false;
    this.isLastDisable = false;
    this.isNextDisable = false;

    if (this.paginationInfo?.page === 1 || this.paginationInfo === null) {
      this.isFirstDisable = true;
      this.isPreviousDisable = true;
    }

    if (this.paginationInfo?.page === this.paginationInfo?.pages || this.paginationInfo === null) {
      this.isLastDisable = true;
      this.isNextDisable = true;
    }

  }

  ngOnInit(): void {
  }

}
