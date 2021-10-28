import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedComponent } from './shared.component';
import { FilterComponent } from './filter/filter.component';
import { PaginationComponent } from './pagination/pagination.component';



@NgModule({
  declarations: [
    SharedComponent,
    FilterComponent,
    PaginationComponent,
  ],
  imports: [
    CommonModule,
  ],
  exports: [
    SharedComponent,
    FilterComponent,
    PaginationComponent,
    CommonModule,
  ]
})
export class SharedModule { }
