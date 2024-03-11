const mongoose = require('mongoose');
const { CoverType } = require('../enums/editionEnums');

const editionSchema = mongoose.Schema({
  book: {
    type: mongoose.Types.ObjectId,
    ref: 'Book',
    required: true,
  },
  yearOfRelease: {
    type: Number,
    required: true,
  },
  cover: {
    type: String,
    enum: [CoverType.Hard, CoverType.Paper, CoverType.Other],
    required: true,
  },
  isbn: {
    type: String,
    required: true,
    unique: true,
  },
  numberOfPages: {
    type: Number,
    required: true,
  },
  inStock: {
    type: Number,
    required: true,
    default: 0,
  },
  rentedTo: {
    type: [mongoose.Types.ObjectId],
    ref: 'Client',
  },
});

const Edition = mongoose.model('Edition', editionSchema);

module.exports = Edition;
