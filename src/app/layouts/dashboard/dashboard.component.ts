import { Component, OnInit } from '@angular/core';
import { LoadingService } from '../../core/services/loading.service';
import { AlertService } from '../../core/services/alerts.service';
import { AuthService } from '../auth/auth.service';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { User } from '../../shared/models/interfaces';
import { selectAuthUser } from '../../core/store/auth/selectors';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss',
})
export class DashboardComponent implements OnInit {
  showFiller = false;

  authuser$: Observable<User | null>
  isLoading = false;
  isLoggedIn = false;

  constructor(
    private loadingService: LoadingService,
    private alertService: AlertService,
    private authService: AuthService,
    private store: Store,
    private route: ActivatedRoute
  ) {
    this.authuser$ = this.store.select(selectAuthUser)
  }
  ngOnInit(): void {
    this.loadingService.isLoading$.subscribe({
      next: (value) => {
        setTimeout(() => {
          this.isLoading = value;
        });
      },
    });
  }

  logout(): void {
    if (confirm('¿Querés desloguearte?')) {
      this.authService.logout()
      this.alertService.showSucces('¡Deslogueadoo con éxito!', '¡Hasta la próxima!')
    }
  }
}
