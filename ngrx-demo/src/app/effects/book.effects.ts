import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { Store } from '@ngrx/store';
import { of } from 'rxjs';
import { catchError, map, switchMap } from 'rxjs/operators';
import * as bookActions from '../actions/book.actions';
import { State } from '../reducers';
import { BookService } from '../services/book.service';

@Injectable()
export class BookEffects {
  constructor(
    private store$: Store<State>,
    private actions$: Actions,
    private service: BookService
  ) {}

  @Effect()
  loadBooks$ = this.actions$.pipe(
    ofType(bookActions.BookActionTypes.LOAD_BOOKS),
    switchMap(() => {
      return this.service.getBooks().pipe(
        map(books => new bookActions.LoadBooksSuccess({ books })),
        catchError(error => of(new bookActions.LoadBooksError({ error })))
      );
    })
  );
}
