import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { AltaAlumnosModule } from './components/alta-alumnos/alta-alumnos.module';
import { UserDetailComponent } from './pages/user-detail/user-detail.component';
import { AlumnosRoutingModule } from './alumnos-routing.module';
import { SharedModule } from '../../../../shared/shared.module';
import { AlumnosComponent } from './alumnos.component';

@NgModule({
  declarations: [
    AlumnosComponent,
    UserDetailComponent
    ],
  imports: [
    CommonModule,
    SharedModule,
    AltaAlumnosModule,
    RouterModule,
    AlumnosRoutingModule
  ],
  exports: [
    AlumnosComponent,
    UserDetailComponent
  ],
  providers: []
})
export class AlumnosModule { }
