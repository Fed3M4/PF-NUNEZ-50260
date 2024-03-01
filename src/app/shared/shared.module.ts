import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FullNamePipe } from './full-name.pipe';
import { ColorearUltimoAgregadoDirective } from './colorear-ultimo-agregado.directive';
import { TitulosTamanioDirective } from './titulos-tamanio.directive';
import { ValidationErrorsPipe } from './validationErrors.pipe';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatTableModule } from '@angular/material/table';
import { MatSelectModule } from '@angular/material/select';
import { MatCardModule } from '@angular/material/card';
import { MatPaginatorModule } from '@angular/material/paginator';





@NgModule({
  declarations: [
    FullNamePipe,
    ColorearUltimoAgregadoDirective,
    TitulosTamanioDirective,
    ValidationErrorsPipe
  ],
  imports: [
    CommonModule
  ],
  exports: [
    FullNamePipe,
    ColorearUltimoAgregadoDirective,
    TitulosTamanioDirective,
    ValidationErrorsPipe,
    MatFormFieldModule,
    MatInputModule,
    FormsModule,
    ReactiveFormsModule,
    MatIconModule,
    MatButtonModule,
    MatTableModule,
    MatSelectModule,
    MatCardModule,
    MatPaginatorModule
  ]
})
export class SharedModule { }
