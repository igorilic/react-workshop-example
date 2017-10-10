import React from 'react';
import PropTypes from 'prop-types';

const BookItem = (props) => {

  return (
    <li className="list-group-item">{props.book.name}</li>
  );
};

BookItem.propTypes = {
  book: PropTypes.object.isRequired
};

export default BookItem;
