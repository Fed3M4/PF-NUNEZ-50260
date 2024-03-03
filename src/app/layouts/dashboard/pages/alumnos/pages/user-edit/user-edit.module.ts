import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserEditComponent } from './user-edit.component';
import { SharedModule } from '../../../../../../shared/shared.module';



@NgModule({
  declarations: [
    UserEditComponent
  ],
  imports: [
    CommonModule,
    SharedModule
  ],
  exports: [
    UserEditComponent
  ]
})
export class UserEditModule { }
