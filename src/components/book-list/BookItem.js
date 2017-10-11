import React from 'react';
import PropTypes from 'prop-types';

const BookItem = (props) => {

  return (
    <li className="list-group-item" onClick={() => props.clickHandler(props.book)}>
      {props.book.name}
    </li>
  );
};

BookItem.propTypes = {
  book: PropTypes.object.isRequired,
  clickHandler: PropTypes.func.isRequired
};

export default BookItem;
