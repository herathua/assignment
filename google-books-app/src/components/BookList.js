import React from 'react';
import BookCard from './BookCard';

const BookList = ({ books, onBookClick }) => {
  return (
    <div className="book-list">
      {books.map(book => (
        <BookCard key={book.id} book={book} onClick={() => onBookClick(book.id)} />
      ))}
    </div>
  );
};

export default BookList;
