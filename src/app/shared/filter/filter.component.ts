import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.scss']
})
export class FilterComponent implements OnInit {
  @Output() load = new EventEmitter();

  constructor() {}

  loadInformation() {
    this.load.emit(null);
  }

  ngOnInit(): void {
  }

}
