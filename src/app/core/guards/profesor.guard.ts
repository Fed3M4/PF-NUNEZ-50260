import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { selectAuthUser } from '../store/auth/selectors';
import { map } from 'rxjs';

export const profesorGuard: CanActivateFn = (route, state) => {
  const router = inject(Router);
  const store = inject(Store)

  return store.select(selectAuthUser).pipe(
    map((user) => {
      return user?.role === "Profesor" ? true : router.createUrlTree(['dashboard', 'home'])
    })
  )};
