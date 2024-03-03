import { Component, EventEmitter, Inject, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { User } from '../../../../../../shared/models/interfaces';
import { UsersService } from '../../../../../../core/services/users.service';

@Component({
  selector: 'app-user-edit',
  templateUrl: './user-edit.component.html',
  styleUrl: './user-edit.component.scss',
})
export class UserEditComponent {
  editForm: FormGroup;
  cursos = ['Angular', 'ReactJS', 'Matemáticas II'];
  activo = ['SI', 'NO'];

  @Output()
  userUpdated = new EventEmitter();

  constructor(
    public dialogRef: MatDialogRef<UserEditComponent>,
    @Inject(MAT_DIALOG_DATA) public data: { user: User },
    private fb: FormBuilder,
    private userService: UsersService
  ) {
    this.editForm = this.fb.group({
      firstName: this.fb.control(data.user.firstName, [Validators.required]),
      lastName: this.fb.control(data.user.lastName, [Validators.required]),
      email: this.fb.control(data.user.email, [
        Validators.required,
        Validators.email,
      ]),
      phone: this.fb.control(data.user.phone, [Validators.required]),
      curso: this.fb.control('', [Validators.required]),
      isActive: this.fb.control(data.user.isActive, [Validators.required]),
      // Agrega aquí más campos según las propiedades de tu interfaz User
    });
  }

  onSubmit(): void {
    if (this.editForm.invalid) {
      this.editForm.markAllAsTouched();
    } else {
      this.userUpdated.emit({});
      const updatedUser: User = {
        ...this.data.user,
        firstName: this.editForm.value.firstName,
        lastName: this.editForm.value.lastName,
        email: this.editForm.value.email,
        phone: this.editForm.value.phone,
        curso: this.editForm.value.curso,
        isActive: this.editForm.value.isActive,
      };
      this.userUpdated.emit(updatedUser);
      this.dialogRef.close(updatedUser);
    }
  }
  onClose(): void {
    // Cerramos el modal sin realizar cambios
    this.dialogRef.close();
  }
}
