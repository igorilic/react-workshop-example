import React from 'react';
import PropTypes from 'prop-types';

const BookDetails = (props) => {
  return (
    <div className="border border-info">
      <ul className="list-group">
        <li className="list-group-item">ID: {props.book.id}</li>
        <li className="list-group-item">Name: {props.book.name}</li>
      </ul>
    </div>
  );
};

BookDetails.propTypes = { 
  book: PropTypes.object.isRequired
};

export default BookDetails;
