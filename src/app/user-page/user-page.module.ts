import { NgModule } from '@angular/core';
import { UsersComponent } from './users/users.component';
import { SharedModule } from '../shared/shared.module';
import { UserPageComponent } from './user-page/user-page.component';
import { UserPageRoutingModule } from './user-page-routing.module';

@NgModule({
  declarations: [
    UsersComponent,
    UserPageComponent,
  ],
  imports: [
    UserPageRoutingModule,
    SharedModule,
  ]
})
export class UserPageModule { }
