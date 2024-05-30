const mongoose = require('mongoose');

const librarySchema = new mongoose.Schema({
  bookname: {
    type: String,
    required: true,
  },
  author: {
    type: String,
    required: true,
    unique: true,
  },
});

const Library = mongoose.model('Library', librarySchema);

module.exports = Library;
