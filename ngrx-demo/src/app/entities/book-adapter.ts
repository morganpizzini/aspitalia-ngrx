import { EntityAdapter, createEntityAdapter } from '@ngrx/entity';
import { Book } from '../models/book';
export function sortByTitle(a: Book, b: Book): number {
  return a.title.localeCompare(b.title);
}

export function selectBookId(a: Book): string {
  return a.bookId;
}

export const BookAdapter: EntityAdapter<Book> = createEntityAdapter<Book>({
  selectId: selectBookId,
  sortComparer: sortByTitle,
  // sortComparer: false // se non voglio avere un ordinamento
});
