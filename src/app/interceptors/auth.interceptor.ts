import { Injectable } from '@angular/core';
import {
  HttpInterceptor,
  HttpEvent,
  HttpRequest,
  HttpHandler,
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { LoginService } from '../login/services/login.service';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {
  headerName = 'Authorization';
  constructor(private readonly loginService: LoginService) {}
  intercept(
    httpRequest: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    const jwt = this.loginService.getJwtToken();
    httpRequest = httpRequest.clone({
      headers: httpRequest.headers.set(
        this.headerName,
        `Bearer ${jwt}`
      ),
    });

    return next.handle(httpRequest);
  }
}
