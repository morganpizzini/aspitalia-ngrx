import { Action } from '@ngrx/store';
import { Book } from '../models/book';

export enum BookActionTypes {
  LOAD_BOOKS = '[Book] Load books',
  LOAD_BOOKS_SUCCESS = '[Book] Load books success',
  LOAD_BOOKS_ERROR = '[Book] Load books error',
}

export class LoadBooks implements Action {
  readonly type = BookActionTypes.LOAD_BOOKS;

  constructor() { }
}

export class LoadBooksSuccess implements Action {
  readonly type = BookActionTypes.LOAD_BOOKS_SUCCESS;

  constructor(public payload: { books: Book[] }) { }
}

export class LoadBooksError implements Action {
  readonly type = BookActionTypes.LOAD_BOOKS_ERROR;

  constructor(public payload: { error: any }) { }
}


export type BookActionsUnion =
  | LoadBooks
  | LoadBooksSuccess
  | LoadBooksError;
