const express = require('express');

const {
  getBooks,
  createBook,
  deleteBook,
} = require('../controllers/bookController');

const { protect } = require('../middleware/authMiddleware');

const router = express.Router();

// /books/ 2x   /:id

router.route('/').get(getBooks).post(protect, createBook);
router.route('/:id').delete(protect, deleteBook);

module.exports = router;
