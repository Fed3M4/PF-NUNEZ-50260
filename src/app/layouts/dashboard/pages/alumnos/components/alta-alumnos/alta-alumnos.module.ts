import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AltaAlumnosComponent } from './alta-alumnos.component';
import { SharedModule } from '../../../../../../shared/shared.module';


@NgModule({
  declarations: [
    AltaAlumnosComponent
  ],
  imports: [
    CommonModule,
    SharedModule
  ],
  exports: [
    AltaAlumnosComponent
  ]
})
export class AltaAlumnosModule { }
