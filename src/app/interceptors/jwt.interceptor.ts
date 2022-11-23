import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpParams
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { AuthService } from '../shared/Auth/services/auth.service';
import { take, exhaustMap } from 'rxjs/operators'

@Injectable()
export class JwtInterceptor implements HttpInterceptor {
  constructor(private authenticationService: AuthService) {}

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>>{
    return this.authenticationService.user.pipe(
      take(1),
      exhaustMap(user => {
        if(!user){
          return next.handle(request)
        }
        const modifiedRequest = request.clone({
           setHeaders: {
          'Authorization': `Bearer ${user.token}`
        }
        });
          return next.handle(modifiedRequest);
      })); 
  }
}
