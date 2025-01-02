import React, { useState, useEffect } from 'react';
import { fetchBookDetails } from '../api';

const BookDetails = ({ bookId }) => {
  const [book, setBook] = useState(null);

  useEffect(() => {
    const getBookDetails = async () => {
      const details = await fetchBookDetails(bookId);
      setBook(details);
    };

    if (bookId) getBookDetails();
  }, [bookId]);

  if (!book) return <div>Loading...</div>;

  return (
    <div className="book-detail">
      <h2>{book.title}</h2>
      <p>{book.description}</p>
      <p><strong>Publisher:</strong> {book.publisher}</p>
      <p><strong>Published:</strong> {book.publishedDate}</p>
      <p><strong>Authors:</strong> {book.authors?.join(', ')}</p>
    </div>
  );
};

export default BookDetails;
