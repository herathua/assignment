const BASE_URL = "https://www.googleapis.com/books/v1/volumes";

// fetch books based on a search query
export const searchBooks = async (query) => {
  const response = await fetch(`${BASE_URL}?q=${query}`);
  const data = await response.json();
  return data.items || [];
};

// fetch details for a specific book
export const fetchBookDetails = async (bookId) => {
  const response = await fetch(`${BASE_URL}/${bookId}`);
  const data = await response.json();
  return data.volumeInfo;
};
