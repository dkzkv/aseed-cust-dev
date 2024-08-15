import { Injectable } from '@angular/core';
import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, switchMap } from 'rxjs/operators';
import {AuthService, AuthStatus} from "../services/auth.service";


@Injectable()
export class AuthInterceptor implements HttpInterceptor {
  constructor(private authService: AuthService) {}

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const token = localStorage.getItem('token');

    let authReq = req;
    if (token) {
      authReq = req.clone({
        setHeaders: {
          Authorization: `Bearer ${token}`
        }
      });
    }

    return next.handle(authReq).pipe(
      catchError(error => {
        if (error.status === 401 && token) {
          // Если ошибка 401, пробуем обновить токен
          return this.authService.refreshToken().pipe(
            switchMap((response) => {
              if (response.status === AuthStatus.Success && response.token) {
                localStorage.setItem('token', response.token);
                const newAuthReq = req.clone({
                  setHeaders: {
                    Authorization: `Bearer ${response.token}`
                  }
                });
                return next.handle(newAuthReq);
              }
              this.authService.logout();
              return throwError(() => new Error('Token refresh failed'));
            }),
            catchError(err => {
              this.authService.logout();
              return throwError(() => new Error('Token refresh failed'));
            })
          );
        } else {
          return throwError(() => error);
        }
      })
    );
  }
}
