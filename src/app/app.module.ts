import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { MyInterceptor } from './my.interceptor';
import { PostPageModule } from './post-page/post-page.module';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    RouterModule,
    PostPageModule,
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: MyInterceptor, multi: true },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
