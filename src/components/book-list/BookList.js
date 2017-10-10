import React, { Component} from 'react';
import PropTypes from 'prop-types';
import BookItem from './BookItem';

class BookList extends Component {

  constructor(props) {
    super(props);
  }

  render() {
    const {books} = this.props;
    const booksIteration = books.map((book) => {
      return (
        <BookItem key={book.id} book={book} />
      );
    });
    return (
      <div>
        <ul className="list-group">
          {booksIteration}
        </ul>
      </div>
    );
  }
}

BookList.propTypes = {
  books: PropTypes.array.isRequired
};

export default BookList;
