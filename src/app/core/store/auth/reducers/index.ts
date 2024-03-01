import { createReducer, on } from '@ngrx/store';
import { AuthActions } from '../actions';
import { User } from '../../../../shared/models/interfaces';

export const featureName = 'auth';

export interface AuthState {
  user: User | null;
}

const initialState: AuthState = {
  user: null,
};

export const authReducer = createReducer(
  initialState,
  on(AuthActions.setAuthUser, (state, action) => {
    return {
      ...state,
      user: action.user,
    };
  }),
  on(AuthActions.logout, () => initialState)
);