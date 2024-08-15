import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private readonly apiUrl = 'http://localhost:7226/api/v1/auth';

  constructor(private http: HttpClient) { }

  signUp(data: { name: string, email: string, password: string }): Observable<AuthSignInResponse> {
    return this.http.post<AuthSignInResponse>(`${this.apiUrl}/sign-up`, data).pipe(
      tap(response => {
        if (response.status === AuthStatus.Success) {
          this.storeTokens(response.token!, response.refreshToken!);
        }
      })
    );
  }

  signIn(data: { email: string, password: string }): Observable<AuthSignInResponse> {
    return this.http.post<AuthSignInResponse>(`${this.apiUrl}/sign-in`, data).pipe(
      tap(response => {
        if (response.status === AuthStatus.Success) {
          this.storeTokens(response.token!, response.refreshToken!);
        }
      })
    );
  }

  refreshToken(): Observable<AuthSignInResponse> {
    const refreshToken = localStorage.getItem('refreshToken');
    return this.http.post<AuthSignInResponse>(`${this.apiUrl}/refresh`, { refreshToken }).pipe(
      tap(response => {
        if (response.status === AuthStatus.Success) {
          this.storeTokens(response.token!, response.refreshToken!);
        } else {
          this.clearTokens();
        }
      })
    );
  }

  private storeTokens(token: string, refreshToken: string) {
    localStorage.setItem('token', token);
    localStorage.setItem('refreshToken', refreshToken);
  }

  private clearTokens() {
    localStorage.removeItem('token');
    localStorage.removeItem('refreshToken');
  }

  logout() {
    this.clearTokens();
    // Логика редиректа на начальную страницу
    window.location.href = '/';  // Перенаправление на начальную страницу
  }
}

export interface AuthSignInResponse {
  status: AuthStatus;
  token?: string;
  refreshToken?: string;
}

export enum AuthStatus {
  Success = "Success",
  Error = "Error",
  EmailAlreadyExists = "EmailAlreadyExists",
  InvalidCredentials = "InvalidCredentials",
  UnverifiedEmail = "UnverifiedEmail",
  NotInWhiteList = "NotInWhiteList",
  NotPermitted = "NotPermitted",
  Expired = 'Expired',
}

