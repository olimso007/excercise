import { NgModule } from '@angular/core';
import { PostsComponent } from './posts/posts.component';
import { SharedModule } from '../shared/shared.module';
import { PostPageComponent } from './post-page/post-page.component';
import { ReactiveFormsModule } from '@angular/forms';
import { PostPageRoutingModule } from './post-page-routing.module';

@NgModule({
  declarations: [
    PostsComponent,
    PostPageComponent,
  ],
  imports: [
    ReactiveFormsModule,
    PostPageRoutingModule,
    SharedModule,
  ]
})
export class PostPageModule { }
