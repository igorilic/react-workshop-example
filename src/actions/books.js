import {
  BOOKS_FETCH_REQUEST,
  BOOKS_FETCH_SUCCESS,
  BOOKS_FETCH_FAILURE
} from '../constants';
import MockApi from './mockApi';

export function fetchBooks() {
  return function(dispatch) {
    dispatch({type: BOOKS_FETCH_REQUEST});
    return MockApi.getBooks().then(
      books => dispatch(fetchBooksSuccess(books)),
      error => dispatch(fetchBooksFailure(error))
    );
  };
}

function fetchBooksSuccess(books) {
  return {
    type: BOOKS_FETCH_SUCCESS,
    payload: {books}
  };
}

function fetchBooksFailure(error) {
  return {
    type: BOOKS_FETCH_FAILURE,
    payload: {error}
  };
}
