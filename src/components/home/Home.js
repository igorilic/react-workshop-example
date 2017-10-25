import React, {Component} from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import BookList from '../book-list/BookList';
import {fetchBooks} from '../../actions/books';

const actions = {
  fetchBooks
};

class Home extends Component {
  constructor(props) {
    super(props);
  }
  componentDidMount() {
    this.props.fetchBooks();
  }
  render() {
    const {books} = this.props.books;

    return (
      <div className="home-page">
        <div className="jumbotron">
          <h1>Home page</h1>
        </div>
        <BookList books={books} />
      </div>
    );
  }
}

Home.propTypes = {
  books: PropTypes.object,
  fetchBooks: PropTypes.func.isRequired
};
 
function mapStateToProps({books}) {
  return {
    books
  };
}

export default connect(mapStateToProps, actions)(Home);
