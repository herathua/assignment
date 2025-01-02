import React, { useState, useEffect } from "react";
import "./App.css";

function App() {
  const [query, setQuery] = useState("");
  const [books, setBooks] = useState([]); 
  const [startIndex, setStartIndex] = useState(0); 

  const fetchBooks = async () => {
    const response = await fetch(
      `https://www.googleapis.com/books/v1/volumes?q=${query}&startIndex=${startIndex}&maxResults=10`
    );
    const data = await response.json();
    setBooks((prevBooks) => [...prevBooks, ...data.items]); 
  };

  const handleSearch = () => {
    setStartIndex(0); 
    setBooks([]); 
    fetchBooks(); 
  };

  const handleLoadMore = () => {
    setStartIndex((prevIndex) => prevIndex + 10); 
    fetchBooks(); 
  };

  useEffect(() => {
    if (query) fetchBooks();
  }, [query]);

  return (
    <div className="App">
      {/* Header Section */}
      <header className="header">
        <h1>Book Finder</h1>
        <p>Discover your next great read!</p>
      </header>

      <div className="search-bar">
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)} 
          placeholder="Search for books"
        />
        <button onClick={handleSearch}>Search</button>
      </div>

      <div className="book-list">
        {books && books.length > 0 ? (
          books.map((book) => (
            <div className="book-card" key={book.id}>
              <img
                className="book-thumbnail"
                src={book.volumeInfo.imageLinks?.thumbnail}
                alt={book.volumeInfo.title}
              />
              <div className="book-info">
                <h3 className="book-title">{book.volumeInfo.title}</h3>
                <p className="book-author">{book.volumeInfo.authors?.join(", ")}</p>
                <p className="book-description">{book.volumeInfo.description}</p>
              </div>
            </div>
          ))
        ) : (
          <p>No books found.</p>
        )}
      </div>

      {books.length > 0 && (
        <button className="load-more" onClick={handleLoadMore}>
          Load More
        </button>
      )}
    </div>
  );
}

export default App;
