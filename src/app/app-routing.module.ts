import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PostPageComponent } from './post-page/post-page.component';
import { UserPageComponent } from './user-page/user-page.component';

const routes: Routes = [
  { path: 'posts', component: PostPageComponent},
  { path: 'users', component: UserPageComponent,
    loadChildren: () => import('./user-page/user-page.module').then(m => m.UserPageModule)},
  { path: '**', component: PostPageComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
