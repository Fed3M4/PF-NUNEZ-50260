import { createActionGroup, emptyProps, props } from '@ngrx/store';
import { User } from '../../../../shared/models/interfaces';

export const AuthActions = createActionGroup({
  source: 'Auth',
  events: {
    'Set auth user': props<{ user: User }>(),
    logout: emptyProps(),
  },
});
