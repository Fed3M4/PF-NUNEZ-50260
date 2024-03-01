import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButton } from '@angular/material/button';

import { SharedModule } from '../../../../shared/shared.module';
import { CursosComponent } from './cursos.component';
import { CursosRoutingModule } from './cursos-routing.module';
import { CursosSubscribeFormComponent } from './pages/cursos-subscribe-form/cursos-subscribe-form.component';



@NgModule({
  declarations: [
    CursosComponent,
    CursosSubscribeFormComponent
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
