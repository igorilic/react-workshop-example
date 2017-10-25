import {
  BOOKS_FETCH_REQUEST,
  BOOKS_FETCH_SUCCESS,
  BOOKS_FETCH_FAILURE
} from '../constants';

const initialState = {
  books: [],
  isFetching: false,
  error: null
};

export default function(state = initialState, action) {
  switch(action.type) {
    case BOOKS_FETCH_REQUEST:
      return Object.assign({}, state, {isFetching: true});
    case BOOKS_FETCH_SUCCESS:
      return Object.assign(
        {}, state,
        {isFetching: false, books: action.payload.books, error: null}
      );
    case BOOKS_FETCH_FAILURE:
      return Object.assign(
        {}, state,
        {isFetching: false, books: [], error: action.payload.error}
      );
    default:
      return state;
  }
}
