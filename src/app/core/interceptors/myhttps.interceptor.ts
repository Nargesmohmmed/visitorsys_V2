import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class MyhttpsInterceptor implements HttpInterceptor {

  constructor() {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {


    if (localStorage.getItem('etoken') !== null) {

      const myToken:any = {
       token: localStorage.getItem('etoken')
      };
      //  ناخد نسخه منه
      request = request.clone({
        setHeaders:myToken
      });

    }

    return next.handle(request);


  }
}
