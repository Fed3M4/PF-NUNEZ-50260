import { createFeature, createReducer, on } from '@ngrx/store';
import { InscripcionesActions } from './inscripciones.actions';
import { Inscripcion } from '../../../../../shared/models/interfaces';

export const inscripcionesFeatureKey = 'inscripciones';

export interface State {
  inscriptions: Inscripcion[];
  loading: boolean;
  error: unknown
}

export const initialState: State = {
  inscriptions: [],
  loading: false,
  error: null
};

export const reducer = createReducer(
  initialState,
  on(InscripcionesActions.loadInscripciones, state => ({...state, loading: true})),
  on(InscripcionesActions.loadInscripcionesSuccess, (state, action) => ({...state, loading: false, inscriptions: action.data})),
  on(InscripcionesActions.loadInscripcionesFailure, (state, action) => ({...state, loading: false, error: action.error})),
);

export const inscripcionesFeature = createFeature({
  name: inscripcionesFeatureKey,
  reducer,
});

