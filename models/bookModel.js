const mongoose = require('mongoose');
const { Genre } = require('../enums/bookEnums');

const authorSchema = mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  age: {
    type: Number,
    required: true,
    min: 18,
    max: 100,
  },
})

const bookSchema = mongoose.Schema({
  title: String,
  authors: [authorSchema],
  yearOfRelease: Number,
  ratings: [Number],
  inStock: Number,
  isbn: String,
  numberOfPages: Number,
  description: String,
  genre: {
    type: [String],
    enum: [Genre.Thriller, Genre.SciFi, Genre.Fiction, Genre.Undefined],
    default: Genre.Undefined
  },
  rentedTo: {
    type: [mongoose.Types.ObjectId],
    ref: 'User'
  }
});

const Book = mongoose.model('Book', bookSchema);

module.exports = Book;
