import React from 'react';

const BookCard = ({ book, onClick }) => {
  return (
    <div className="book-card" onClick={onClick}>
      <img className="book-thumbnail" src={book.volumeInfo.imageLinks?.thumbnail} alt={book.volumeInfo.title} />
      <div className="book-title">{book.volumeInfo.title}</div>
      <div className="book-author">{book.volumeInfo.authors?.join(', ')}</div>
    </div>
  );
};

export default BookCard;
