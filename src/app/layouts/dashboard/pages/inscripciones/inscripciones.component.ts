import { Component, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { InscripcionesActions } from './store/inscripciones.actions';
import { selectInscriptions, selectInscriptionsLoading } from './store/inscripciones.selectors';
import { Observable, delay } from 'rxjs';
import { Inscripcion } from '../../../../shared/models/interfaces';

@Component({
  selector: 'app-inscripciones',
  templateUrl: './inscripciones.component.html',
  styleUrl: './inscripciones.component.scss'
})
export class InscripcionesComponent implements OnInit {
  inscriptions$: Observable<Inscripcion[]>
  isLoading$: Observable<boolean>

  displayedColumns: string[] = ['id', 'fullName', 'email', 'activo', 'cursoID', 'cursoName', 'role', 'actions'];

  constructor(
    private store: Store
  ){
    this.inscriptions$ = this.store.pipe(select(selectInscriptions))
    .pipe(
      delay(1000)
      );
    this.isLoading$ = this.store.select(selectInscriptionsLoading)
  }
  ngOnInit(): void {
    this.store.dispatch(InscripcionesActions.loadInscripciones())
  }
}
