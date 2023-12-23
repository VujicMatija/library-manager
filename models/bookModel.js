const mongoose = require('mongoose');

const bookSchema = mongoose.Schema({
  title: String,
  authors: [String],
  yearOfRelease: Number,
  ratings: [Number],
  inStock: Number,
  isbn: String,
  numberOfPages: Number,
  description: String,
  genre: String,
});

const Book = mongoose.model('Book', bookSchema);

module.exports = Book;
