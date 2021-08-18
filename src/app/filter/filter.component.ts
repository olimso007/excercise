import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.css']
})
export class FilterComponent implements OnInit {
  @Output() load = new EventEmitter();

  constructor() {}

  loadPost() {
    this.load.emit(null);
  }

  ngOnInit(): void {
  }

}
