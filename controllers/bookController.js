const Book = require('../models/bookModel');

// @desc    Get all books from DB
// @route   GET /books
// @access  Public
const getBooks = async (req, res) => {
  try {
    const books = await Book.find({}).populate('rentedTo');

    res.json(books);
  } catch (error) {
    res.status(500);
    res.json({
      message: error.message,
    });
  }
};

// @desc    Create a book
// @route   POST /books
// @access  Public
const createBook = async (req, res) => {
  try {
    const { title, genre, authors, isbn, yearOfRelease, rentedTo } = req.body;

    const book = new Book({ title, genre, authors, isbn, yearOfRelease, rentedTo });
    await book.save();

    res.status(201);
    res.json(book);
  } catch (error) {
    res.status(500);
    res.json({
      message: error.message,
    });
  }
};

// @desc    Delete a book by ID
// @route   DELETE /books/:id
// @access  Public
const deleteBook = async (req, res) => {
  // Trazimo u bazi knjigu sa tim ID-jem
  const book = await Book.findById(req.params.id);

  // Ako ne postoji, vracamo 404 Not Found
  if (!book) {
    res.status(404);
    res.json({
      message: 'Book with the given ID was not found.',
    });
    return;
  }

  // Ako postoji, brisemo i vracamo taj objekat koji smo obrisali
  await Book.deleteOne({ _id: req.params.id });
  res.json(book);
};

module.exports = {
  getBooks,
  createBook,
  deleteBook,
};
