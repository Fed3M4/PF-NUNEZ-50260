import { Component, OnInit } from '@angular/core';
import { Course, User } from '../../../../shared/models/interfaces';
import { CursosService } from '../../../../core/services/cursos.service';
import { MatDialog } from '@angular/material/dialog';
import { CursosSubscribeFormComponent } from './pages/cursos-subscribe-form/cursos-subscribe-form.component';
import { UsersService } from '../../../../core/services/users.service';

@Component({
  selector: 'app-cursos',
  templateUrl: './cursos.component.html',
  styleUrl: './cursos.component.scss'
})
export class CursosComponent implements OnInit {
  cursos: Course[] = []
  usuarios: User[] = []

  constructor(
    private cursosService: CursosService,
    private dialog: MatDialog,
    private usersService: UsersService
    ) {}
    
  ngOnInit(): void { 
    this.cursosService.getCursos().subscribe({
      next: (cursos) => this.cursos = cursos,
    })
    this.usersService.getAllUsers().subscribe({
      next: (users) => this.usuarios = users
    })
   }
 
   openInscriptionModal(curso: Course): void {
     const dialogRef = this.dialog.open(CursosSubscribeFormComponent, {
       width: '500px',
       data: { curso: curso }
     });
 
    dialogRef.componentInstance.enrolledInCourse.subscribe((newRegistered: any) => {
      this.onEnrolledInCourse(newRegistered)
    });
   }
   onEnrolledInCourse(data: any): void {
    console.log(data)
    const usuarioEncontrado = this.usuarios.find(usuario =>
      usuario.email === data.email && usuario.password === data.password
    );
    const cursoEncontrado = this.cursos.find(curso => curso.name === data.curso);
    if (usuarioEncontrado && cursoEncontrado) {
      cursoEncontrado.alumnosInscriptos.push(usuarioEncontrado.firstName + " " + usuarioEncontrado.lastName);
      console.log(this.cursos)
    } else {
      console.log('Usuario no encontrado.');
    }
  }
}
