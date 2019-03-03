import { EntityState } from '@ngrx/entity';
import { BookActionsUnion, BookActionTypes } from '../actions/book.actions';
import { BookAdapter } from '../entities/book-adapter';
import { Book } from '../models/book';
import { createFeatureSelector, createSelector } from '@ngrx/store';

export interface State extends EntityState<Book> {
  isLoading: boolean;
}

export const initialState: State = BookAdapter.getInitialState({
  isLoading: false
});

export function reducer(state = initialState, action: BookActionsUnion): State {
  switch (action.type) {
    case BookActionTypes.LOAD_BOOKS: {
      return {
        ...state,
        isLoading: true
      };
    }
    case BookActionTypes.LOAD_BOOKS_SUCCESS: {
      return BookAdapter.upsertMany(action.payload.books, {
        ...state,
        isLoading: false
      });
    }
    case BookActionTypes.LOAD_BOOKS_ERROR: {
      return {
        ...state,
        isLoading: false
      };
    }
    default:
      return state;
  }
}

const { selectIds, selectEntities, selectAll, selectTotal } = BookAdapter.getSelectors();


const selectBookState = createFeatureSelector<State>('books');
export const selectFolderState = createFeatureSelector<State>('books');

export const isLoadingBooks = createSelector(
  selectBookState,
  (state: State) => state.isLoading
);

export const selectAllBooks = createSelector(
  selectBookState,
  selectAll
);

