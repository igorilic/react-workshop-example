import {SELECT_BOOK} from '../constants';

const initialState = {
  book: {},
  showDetails: false
};

export default function(state = initialState, action) {
  switch(action.types) {
    case SELECT_BOOK: 
      return Object.assign({}, state, {book: action.payload.selectedBook, showDetails: true});
    default:
      return state;
  }
}
