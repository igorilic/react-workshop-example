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
    const {books, isFetching, error, selectedBook, showDetails} = this.props;
    if (isFetching) {
      return (
        <div>Loading............</div>
      );
    }

    if (error) { 
      return (
        <div> Some error is {error} </div>
      );
    }

    const booksIteration = books.map((book) => {
      return (
        <BookItem key={book.id} book={book} clickHandler={(book) => {
          this.props.selectBook(book);
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
  books: PropTypes.array.isRequired,
  isFetching: PropTypes.bool,
  error: PropTypes.string,
  selectedBook: PropTypes.object,
  selectBook: PropTypes.func
};

function mapStateToProps({selectedBook, books}) {
  return {selectedBook, books};
}

export default connect(mapStateToProps, actions)(BookList);
