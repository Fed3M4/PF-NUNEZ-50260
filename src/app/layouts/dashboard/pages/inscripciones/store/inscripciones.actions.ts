import { createActionGroup, emptyProps, props } from '@ngrx/store';
import { Inscripcion } from '../../../../../shared/models/interfaces';

export const InscripcionesActions = createActionGroup({
  source: 'Inscripciones',
  events: {
    'Load Inscripciones': emptyProps(),
    'Load Inscripciones Success': props<{ data: Inscripcion[] }>(),
    'Load Inscripciones Failure': props<{ error: unknown }>(),
  }
});
