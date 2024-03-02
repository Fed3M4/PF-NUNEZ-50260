import { createFeatureSelector, createSelector } from '@ngrx/store';
import * as fromInscripciones from './inscripciones.reducer';

export const selectInscripcionesState = createFeatureSelector<fromInscripciones.State>(
  fromInscripciones.inscripcionesFeatureKey
);

export const selectInscriptions = createSelector(selectInscripcionesState, (state) => state.inscriptions)

export const selectInscriptionsLoading = createSelector(selectInscripcionesState, (state) => state.loading)