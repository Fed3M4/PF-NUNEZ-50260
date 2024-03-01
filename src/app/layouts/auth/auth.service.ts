import { Injectable } from '@angular/core';
import { LoginData, User } from '../../shared/models/interfaces';
import { Router } from '@angular/router';
import { Observable, catchError, map, of, tap } from 'rxjs';
import { AlertService } from '../../core/services/alerts.service';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment';
import { AuthActions } from '../../core/store/auth/actions';
import { Store } from '@ngrx/store';

@Injectable({ providedIn: 'root' })
export class AuthService {
  constructor(
    private router: Router,
    private alertService: AlertService,
    private httpClient: HttpClient,
    private store: Store
  ) {}

  private setAuthUser(user: User): void {
    this.store.dispatch(AuthActions.setAuthUser({ user }));
    localStorage.setItem('token', user.token);
  }

  login(data: LoginData): Observable<User[]> {
    return this.httpClient
      .get<User[]>(
        `${environment.apiURL}/users?email=${data.email}&password=${data.password}`
      )
      .pipe(
        tap((response) => {
          if (!!response[0]) {
            this.setAuthUser(response[0]);
            this.router.navigate(['dashboard', 'home']);
          } else {
            this.alertService.showError('Email o password invalidos');
          }
        })
      );
  }

  logout(): void {
    this.store.dispatch(AuthActions.logout());
    this.router.navigate(['auth', 'login']);
    localStorage.removeItem('token');
  }

  verifyToken() {
    return this.httpClient
      .get<User[]>(
        `${environment.apiURL}/users?token=${localStorage.getItem('token')}`
      )
      .pipe(
        map((response) => {
          if (response.length) {
            this.setAuthUser(response[0]);
            return true;
          } else {
            this.store.dispatch(AuthActions.logout());
            localStorage.removeItem('token');
            return false;
          }
        }),
        catchError(() => of(false))
      );
  }
}
