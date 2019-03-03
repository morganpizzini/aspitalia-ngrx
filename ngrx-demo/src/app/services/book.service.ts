import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Book } from '../models/book';

@Injectable({
  providedIn: 'root'
})
export class BookService {
  getBooks(): Observable<Book[]> {
    return of([
      {
        bookId: '01',
        title: 'First book',
        description: 'First description'
      },
      {
        bookId: '02',
        title: 'Second book',
        description: 'Second description'
      }
    ]);
  }
}
