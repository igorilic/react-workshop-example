import {SELECT_BOOK} from '../constants';

const initialState = {
  book: {},
  showDetails: false
};

export default function(state = initialState, action) {
  switch(action.type) {
    case SELECT_BOOK: 
      return Object.assign({}, {book: action.payload.book, showDetails: true});
    default:
      return state;
  }
}
