import React, { Component} from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import BookItem from './BookItem';
import BookDetails from '../book-details/BookDetails';
import {selectBook} from '../../actions/selectedBook';

const actions = {
  selectBook,
};

class BookList extends Component {

  constructor(props) {
    super(props);

    this.handleBook = this.handleBook.bind(this);
  }

  handleBook(book) {
    this.props.selectBook(book);
  }

  render() {
    const {books, selectBook} = this.props;
    const {book, showDetails} = this.props.selectedBook;

    const booksIteration = books.map(b => {
      return (
        <BookItem key={b.id} book={b} clickHandler={b => {
          selectBook(b);
        }}/>
      );
    });
    return (
      <div>
        <ul className="list-group">
          {booksIteration}
        </ul>
        {showDetails
            ? (<BookDetails book={book} />)
            : ''
        }
      </div>
    );
  }
}

BookList.propTypes = {
  books: PropTypes.array.isRequired,
  isFetching: PropTypes.bool,
  error: PropTypes.string,
  selectedBook: PropTypes.object,
  selectBook: PropTypes.func
};

function mapStateToProps({selectedBook}) {
  return {selectedBook};
}

export default connect(mapStateToProps, actions)(BookList);
