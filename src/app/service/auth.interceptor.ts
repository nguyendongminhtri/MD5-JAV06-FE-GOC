import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';
import {TokenService} from './token.service';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {

  constructor(private tokenService: TokenService) {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    let authRequest = request;
    let token = this.tokenService.getToken();
    if(token!=null){
      console.log('Có TOKEN RỒI ---->');
      authRequest = request.clone({headers: request.headers.set('Authorization', 'Bearer'+token)})
      console.log('Trong Request có gì --->', authRequest);
    }
    return next.handle(authRequest);
  }
}
