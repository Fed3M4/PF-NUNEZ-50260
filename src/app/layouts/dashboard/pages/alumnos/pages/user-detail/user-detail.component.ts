import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { User } from '../../../../../../shared/models/interfaces';
import { UsersService } from '../../../../../../core/services/users.service';
import { AlertService } from '../../../../../../core/services/alerts.service';

@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrl: './user-detail.component.scss'
})
export class UserDetailComponent implements OnInit {
  userFinded?: User

  constructor(
    private route: ActivatedRoute,
    private usersService: UsersService,
    private alertService: AlertService
    ) {}

  ngOnInit(): void {
    this.usersService.getUserByID(this.route.snapshot.params['id']).subscribe({
      next: (findedUser) => {
        if(findedUser.role == 'Alumno') {
          this.userFinded = findedUser
        } else {
          this.alertService.showError('No hay alumno con ese ID')
        }
      }
    })
  }
}
