import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpEvent, HttpResponse, HttpRequest, HttpHandler } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class MyInterceptor implements HttpInterceptor {
  intercept(httpRequest: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const API_ACCESS_TOKEN = '70da71de2b2b3a695fc4ffffae3bce772542776c611cbe0b13778448d5da09b8';
    return next.handle(httpRequest.clone({ setHeaders: {
        Authorization: `Bearer ${API_ACCESS_TOKEN}`
       } }));
  }
}
