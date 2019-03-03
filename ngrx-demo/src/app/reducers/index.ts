import { ActionReducerMap } from '@ngrx/store';
import * as fromBooks from './book.reducer';

export interface State {
  books: fromBooks.State;
}

export const reducers: ActionReducerMap<State> = {
  books: fromBooks.reducer
};
