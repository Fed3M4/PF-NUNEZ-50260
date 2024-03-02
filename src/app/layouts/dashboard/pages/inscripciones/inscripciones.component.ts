import { Component } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { InscripcionesActions } from './store/inscripciones.actions';
import { selectInscriptions, selectInscriptionsLoading } from './store/inscripciones.selectors';
import { Observable } from 'rxjs';
import { Inscripcion } from '../../../../shared/models/interfaces';

@Component({
  selector: 'app-inscripciones',
  templateUrl: './inscripciones.component.html',
  styleUrl: './inscripciones.component.scss'
})
export class InscripcionesComponent {
  inscriptions$: Observable<Inscripcion[]>
  isLoading$: Observable<boolean>

  displayedColumns: string[] = ['id', 'fullName', 'email', 'activo', 'cursoID', 'cursoName', 'role', 'actions'];
  dataSource: Inscripcion[]= [];

  constructor(
    private store: Store
  ){
    this.inscriptions$ = this.store.pipe(select(selectInscriptions));
    console.log(this.inscriptions$)
    this.isLoading$ = this.store.select(selectInscriptionsLoading)
    this.store.dispatch(InscripcionesActions.loadInscripciones())
  }
  
  deleteInscription(inscripcionAEliminar: string) {
    console.log(inscripcionAEliminar)
  }
}
