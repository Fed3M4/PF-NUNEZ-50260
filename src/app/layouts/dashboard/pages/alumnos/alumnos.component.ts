import { Component, OnInit } from '@angular/core';
import { User } from '../../../../shared/models/interfaces';
import { MatDialog } from '@angular/material/dialog';
import { AltaAlumnosComponent } from './components/alta-alumnos/alta-alumnos.component';
import { UsersService } from '../../../../core/services/users.service';
import { LoadingService } from '../../../../core/services/loading.service';
import { AlertService } from '../../../../core/services/alerts.service';
import { PageEvent } from '@angular/material/paginator';

@Component({
  selector: 'app-alumnos',
  templateUrl: './alumnos.component.html',
  styleUrl: './alumnos.component.scss',
})
export class AlumnosComponent implements OnInit {
  displayedColumns: string[] = ['id', 'fullName', 'phone', 'email', 'delete'];
  dataSource: User[] = [];
  colorearTabla = false;

  totalItems = 0;
  pageSize = 5;
  currentPage = 1

  constructor(
    private usersService: UsersService,
    private dialog: MatDialog,
    private loadingService: LoadingService,
    private alertService: AlertService
  ) {}
  ngOnInit(): void {
    this.cargarPantalla()
  }

  cargarPantalla(): void {
    // this.usersService.getAlumnos().subscribe({
    //   next: (alumnos) => (this.dataSource = alumnos),
    // });
    this.usersService.paginate(this.currentPage, 5).subscribe({
      next: (value) => {
        const paginationResult = value;
        console.log(paginationResult)
        this.totalItems = paginationResult.items;
        this.dataSource= paginationResult.data
      }
    })
  }

  onPage(ev: PageEvent) {
    this.currentPage = ev.pageIndex + 1
    this.usersService.paginate(this.currentPage, ev.pageSize).subscribe({
      next: (paginateResult) => {
        this.totalItems = paginateResult.items;
        this.dataSource = paginateResult.data;
        this.pageSize = ev.pageSize;
      }
    })
  }

  eliminarAlumnos(element: User): void {
    if(confirm('¿Estas seguro?')){
      this.loadingService.setIsLoading(true)
      this.usersService.deleteUser(element.id).subscribe({
        next: () => {
          this.usersService.getAlumnos().subscribe({
            next: (alumnos) => {
              this.dataSource = [...alumnos];
            },
            complete: () => this.loadingService.setIsLoading(false),
            error: () => this.alertService.showError('Hubo un error al cargar los usuarios')
          })
        },
        error: () => this.alertService.showError('Hubo un error inesperado')
      });
    }
  }

  openNewUserModal(): void {
    const dialogRef = this.dialog.open(AltaAlumnosComponent, {
      width: '75vw',
      height: 'auto',
    });
    dialogRef.componentInstance.userSubmitted.subscribe((newUser: User) => {
      this.usersService
        .createUser({ ...newUser, isActive: true, role: 'Alumno' })
        .subscribe({
          next: () => {
            this.usersService.getAlumnos().subscribe({
              next: (alumnos) => {
                this.dataSource = alumnos;
                this.colorearTabla = true;
              },
              error: (error) => {
                this.alertService.showError(`Error al obtener los alumnos:${error}`);
              }
            });
          },
          error: (error) => {
            console.error(`Error al crear el usuario: ${error}`);
          }
        });
    });
  }
}
