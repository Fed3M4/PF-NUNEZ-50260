import { Component, OnDestroy, OnInit } from '@angular/core';
import { User } from '../../../../shared/models/interfaces';
import { UsersService } from '../../../../core/services/users.service';
import { Subject, takeUntil } from 'rxjs';

@Component({
  selector: 'app-profesores',
  templateUrl: './profesores.component.html',
  styleUrl: './profesores.component.scss'
})

export class ProfesoresComponent implements OnInit, OnDestroy {
  dataSource: User[] = [];
  private unsubscribe$ = new Subject<void>();

  constructor(private usersService: UsersService) {}
  
  ngOnDestroy(): void {
    this.unsubscribe$.next();
    this.unsubscribe$.complete();
  }

  ngOnInit(): void {
    this.cargarPantalla()
  }

  cargarPantalla(): void {
    this.usersService.getProfesores()
      .pipe(takeUntil(this.unsubscribe$))
      .subscribe({
        next: (profesores) => this.dataSource = profesores,
      });

  }

  displayedColumns: string[] = ['id', 'fullName', 'phone', 'email', 'curso', 'disponible'];
}