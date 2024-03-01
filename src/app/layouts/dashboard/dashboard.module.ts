import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard.component';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
import { SharedModule } from '../../shared/shared.module';
import { RouterModule } from '@angular/router';
import { MatListModule } from '@angular/material/list';
import { HomeModule } from './pages/home/home.module';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { DashboardRoutingModule } from './dashboard-routing-module';

import { AlumnosModule } from './pages/alumnos/alumnos.module';
import { NosotrosModule } from './pages/nosotros/nosotros.module';
import { ProfesoresModule } from './pages/profesores/profesores.module';
import { CursosModule } from './pages/cursos/cursos.module';


@NgModule({
  declarations: [DashboardComponent],
  imports: [
    CommonModule,
    MatSidenavModule,
    MatIconModule,
    MatButtonModule,
    MatToolbarModule,
    SharedModule,
    RouterModule,
    MatListModule,
    HomeModule,
    MatProgressSpinnerModule,
    
    DashboardRoutingModule,
    AlumnosModule,
    NosotrosModule,
    ProfesoresModule,
    CursosModule,
  ],
  exports: [DashboardComponent],
})
export class DashboardModule {}
