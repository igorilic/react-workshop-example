import {combineReducers} from 'redux';
import books from './books';
import selectedBook from './selectedBook';
const rootReducer = combineReducers({
  books,
  selectedBook
});

export default rootReducer;

