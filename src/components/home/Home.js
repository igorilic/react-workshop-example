import React, {Component} from 'react';
import BookList from '../book-list/BookList';

const books = [
  {id: 1, name: 'React book'},
  {id: 2, name: 'Redux book'},
  {id: 3, name: 'ES6 book'},
];

class Home extends Component {
  render() {
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

export default Home;
