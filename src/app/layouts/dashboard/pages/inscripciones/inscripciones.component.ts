import { Component, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { InscripcionesActions } from './store/inscripciones.actions';
import { selectInscriptions, selectInscriptionsLoading } from './store/inscripciones.selectors';
import { Observable, delay, findIndex } from 'rxjs';
import { Inscripcion } from '../../../../shared/models/interfaces';
import { InscripcionesService } from './inscripciones.service';
import { AlertService } from '../../../../core/services/alerts.service';

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
    private store: Store,
    private inscripcionesService: InscripcionesService,
    private alertService: AlertService
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
  
  deleteInscription(inscripcionAEliminarID: string) {
    if(confirm('¿Estas seguro?')){
      this.inscripcionesService.deleteUser(inscripcionAEliminarID).subscribe({
        next: () => {
          this.inscripcionesService.getInscriptions().subscribe({
            next: (inscripciones) => {
              const indice = inscripciones.findIndex(objeto => objeto.id === inscripcionAEliminarID);
              if(indice !== -1){
                inscripciones.splice(indice, 1)
                this.store.dispatch(InscripcionesActions.loadInscripciones())
              }
            },
            error: () => this.alertService.showError('Hubo un error al cargar los usuarios')
          })
        },
        error: () => this.alertService.showError('Hubo un error inesperado')
      });
    }
  }
}
