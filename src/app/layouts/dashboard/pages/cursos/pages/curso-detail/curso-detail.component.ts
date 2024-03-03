import { Component, Inject, OnInit } from '@angular/core';
import { Course, User } from '../../../../../../shared/models/interfaces';
import { UsersService } from '../../../../../../core/services/users.service';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-curso-detail',
  templateUrl: './curso-detail.component.html',
  styleUrl: './curso-detail.component.scss'
})
export class CursoDetailComponent implements OnInit {
  course: Course;
  users?: User[] = [];
  filteredUsers: User[] = [];


  displayedColumns: string[] = ['id', 'fullName', 'phone', 'email', 'curso', 'disponible'];

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any,
    private usersService: UsersService,
    ) {
    this.course = this.data.curso;
    console.log(this.course)

  }
  ngOnInit(): void {
  this.usersService.getAlumnos().subscribe({
    next: (users) => {
      this.users = users;
      this.filterUsersByCourse();
      console.log(this.users);
      console.log(this.filteredUsers)
    },
    error: (error) => {
      console.error('Error al obtener los usuarios:', error);
    }
  });
  
  }
  filterUsersByCourse(): void {
    if(!!this.users) {
      this.filteredUsers = this.users.filter(user => {
        // Aquí puedes ajustar la lógica según la estructura de tu modelo de datos
        // por ejemplo, si el usuario tiene una propiedad 'courses' que es un array
        // de los cursos en los que está inscrito, podrías hacer algo como:
        // return user.courses.includes(this.course.id);
        // Si solo tienes el nombre del curso como referencia, puedes hacer algo como:
        return user.curso == this.course.name;
      });
    }

  }
}
