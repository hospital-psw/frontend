import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class JwtInterceptor implements HttpInterceptor {

  // TODO: pass authentification service to constructor
  constructor() {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {

    // TODO: uncomment these lines to send jwt token to BE
    /*     
    const accesToken = this.authenticationService.getToken();
    const isLoggedIn = this.authenticationService.isLoggedIn();
    const isApiUrl = request.url.startsWith(environment.apiUrl);
    if (isLoggedIn && isApiUrl) {
      request = request.clone({
        setHeaders: {
          Authorization: `Bearer ${accesToken}`,
        },
      });
    }
    */
    return next.handle(request);
  }
}
