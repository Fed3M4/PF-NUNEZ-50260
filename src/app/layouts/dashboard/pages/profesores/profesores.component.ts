import { Component, OnInit } from '@angular/core';
import { User } from '../../../../shared/models/interfaces';
import { UsersService } from '../../../../core/services/users.service';

@Component({
  selector: 'app-profesores',
  templateUrl: './profesores.component.html',
  styleUrl: './profesores.component.scss'
})

export class ProfesoresComponent implements OnInit {
  dataSource: User[] = [];

  constructor(private usersService: UsersService) {}
  ngOnInit(): void {
    this.cargarPantalla()
  }

  cargarPantalla(): void {
    this.usersService.getProfesores().subscribe({
      next: (profesores) => this.dataSource = profesores,
    })
  }

  displayedColumns: string[] = ['id', 'fullName', 'phone', 'email', 'curso', 'disponible'];
}