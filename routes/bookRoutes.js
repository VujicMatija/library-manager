const express = require('express');

const {
  getBooks,
  createBook,
  deleteBook,
} = require('../controllers/bookController');

const router = express.Router();

// DELETE /books/alkdjaoz7xc6z87c req.params.id

router.route('/').get(getBooks).post(createBook);
router.route('/:id').delete(deleteBook);

module.exports = router;
