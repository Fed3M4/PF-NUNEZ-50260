import { Pipe, PipeTransform } from '@angular/core';
import { ValidationErrors } from '@angular/forms';

@Pipe({
  name: 'validationErrors',
})
export class ValidationErrorsPipe implements PipeTransform {
  transform(errors?: ValidationErrors | null, ...args: any[]) {
    if (!!errors) {
      let messages = [];

      if (errors['required']) messages.push('Este campo es requerido');
      if (errors['email']) messages.push('No es un email valido');
      if (errors['minlength']) messages.push(`La contraseña debe tener al menos ${errors['minlength']?.requiredLength} caracteres`);

      return messages.join('. ') + '.';
    }
    return null;
  }
}
