// controllers/booksController.js

const books = require('../models/booksModel');

// Get all books
const getAllGenre = (req, res) => {
  res.status(200).json(books);
};

// Get books by Genre
const getBooksByGenre = (req, res) => {
  const genre = req.params.genre;
  const filteredBooks = books.filter(book => book.genre.toLowerCase() === genre.toLowerCase());

  if (filteredBooks.length === 0) {
    return res.status(404).json({message: `No books found in the genre : ${genre}`});
 
  }
  res.status(200).json(filteredBooks);
};

module.exports = {
    getAllGenre,
    getBooksByGenre,
  };
