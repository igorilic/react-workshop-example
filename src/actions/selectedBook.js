import {SELECT_BOOK} from '../constants';

export function selectBook(book) {
  return {
    type: SELECT_BOOK,
    payload: {book}
  };
}
