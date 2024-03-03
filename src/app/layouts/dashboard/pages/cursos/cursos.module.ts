import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButton } from '@angular/material/button';

import { SharedModule } from '../../../../shared/shared.module';
import { CursosComponent } from './cursos.component';
import { CursosRoutingModule } from './cursos-routing.module';
import { CursosSubscribeFormComponent } from './pages/cursos-subscribe-form/cursos-subscribe-form.component';
import { CursoDetailComponent } from './pages/curso-detail/curso-detail.component';



@NgModule({
  declarations: [
    CursosComponent,
    CursosSubscribeFormComponent,
    CursoDetailComponent
  ],
  imports: [
    CommonModule,
    MatButton,
    CursosRoutingModule,
    SharedModule
  ],
  exports: [
    CursosComponent,
    CursosSubscribeFormComponent
  ]
})
export class CursosModule { }
