import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NosotrosComponent } from './nosotros.component';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { NosotrosRoutingModule } from './nosotros-routing.module';



@NgModule({
  declarations: [
    NosotrosComponent
  ],
  imports: [
    CommonModule,
    MatProgressSpinnerModule,
    NosotrosRoutingModule
  ],
  exports: [
    NosotrosComponent
  ]
})
export class NosotrosModule { }
