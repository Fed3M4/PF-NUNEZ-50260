import { Component, EventEmitter, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { AlertService } from '../../../../../../core/services/alerts.service';
import { CursosService } from '../../../../../../core/services/cursos.service';
import { Course } from '../../../../../../shared/models/interfaces';

@Component({
  selector: 'app-cursos-subscribe-form',
  templateUrl: './cursos-subscribe-form.component.html',
  styleUrl: './cursos-subscribe-form.component.scss',
})
export class CursosSubscribeFormComponent {
  coursesForm: FormGroup;
  cursos?: Course[];

  @Output()
  enrolledInCourse = new EventEmitter();

  constructor(
    public dialogRef: MatDialogRef<CursosSubscribeFormComponent>,
    private fb: FormBuilder,
    private alertService: AlertService,
    private cursosService: CursosService
  ) {
    this.coursesForm = this.fb.group({
      email: this.fb.control('', [Validators.required, Validators.email]),
      password: this.fb.control('', [
        Validators.required,
        Validators.minLength(8),
      ]),
      curso: this.fb.control('', [Validators.required]),
    });
  }
  ngOnInit(): void {
    this.cursosService.getCursos().subscribe({
      next: (cursos) => (this.cursos = [...cursos]),
    });
    console.log(this.cursos);
  }
  onSubmit(): void {
    if (this.coursesForm.invalid) {
      this.coursesForm.markAllAsTouched();
    } else {
      this.enrolledInCourse.emit(this.coursesForm.value);
      this.coursesForm.reset();
      this.dialogRef.close();
      this.alertService.showSucces('¡Felicitaciones!', '¡Inscripcion exitosa!');
    }
  }
  closeModal(): void {
    this.dialogRef.close();
  }
  hide = true;
}
