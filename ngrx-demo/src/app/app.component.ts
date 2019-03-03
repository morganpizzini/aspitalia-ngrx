import { Component, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { selectAllBooks } from './reducers/book.reducer';
import { State } from './reducers';
import { Observable } from 'rxjs';
import { Book } from './models/book';
import { LoadBooks } from './actions/book.actions';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title = 'ngrx-demo';

  books$: Observable<Book[]>;

  constructor(private store: Store<State>) {
    this.books$ = store.pipe(select(selectAllBooks));
  }

  ngOnInit() {
    this.store.dispatch(new LoadBooks());
  }
}
