import React, { Component} from 'react';
import PropTypes from 'prop-types';
import BookItem from './BookItem';
import BookDetails from '../book-details/BookDetails';

class BookList extends Component {

  constructor(props) {
    super(props);

    this.state = {
      showDetails: false,
      selectedBook: null
    };

    this.handleBook = this.handleBook.bind(this);
  }

  handleBook(book) {
    this.setState({showDetails: true, selectedBook: book});
  }

  render() {
    const {books} = this.props;
    const booksIteration = books.map((book) => {
      return (
        <BookItem key={book.id} book={book} clickHandler={(book) => {
          this.setState({showDetails: true, selectedBook: book});
        }}/>
      );
    });
    return (
      <div>
        <ul className="list-group">
          {booksIteration}
        </ul>
        {this.state.showDetails
            ? (<BookDetails book={this.state.selectedBook} />)
            : ''
        }
      </div>
    );
  }
}

BookList.propTypes = {
  books: PropTypes.array.isRequired
};

export default BookList;
