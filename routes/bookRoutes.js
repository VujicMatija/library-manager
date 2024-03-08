const express = require('express');

const {
  getBooks,
  createBook,
  deleteBook,
} = require('../controllers/bookController');

const { protect } = require('../middleware/authMiddleware');

const router = express.Router();

// /api/books 2x
router.route('/').get(getBooks).post(protect, createBook);

// /api/books/:id
// /api/books/123
// /api/books/5-zvezdica
router.route('/:id').delete(protect, deleteBook);

module.exports = router;
