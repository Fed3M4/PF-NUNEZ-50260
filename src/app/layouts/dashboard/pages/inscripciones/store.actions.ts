import { createActionGroup, emptyProps, props } from '@ngrx/store';

export const StoreActions = createActionGroup({
  source: 'Store',
  events: {
    'Load Stores': emptyProps(),
    'Load Stores Success': props<{ data: unknown }>(),
    'Load Stores Failure': props<{ error: unknown }>(),
  }
});
