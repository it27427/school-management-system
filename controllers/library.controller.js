const Book = require('../models/library.model');
const { handleValidationError } = require('../middlewares/error.handler');

const createBook = async (req, res, next) => {
  const { bookname, author } = req.body;

  try {
    if (!bookname || !author) {
      handleValidationError('Please fill up full form', 400);
    }

    await Book.create({ bookname, author });
    res.status(201).json({
      success: true,
      message: 'Book Created Successfully!',
    });
  } catch (error) {
    next(error);
    console.error(error.message);
  }
};

const getAllBooks = async (req, res, next) => {
  try {
    const books = await Book.find();
    res.status(200).json({
      success: true,
      books,
    });
  } catch (error) {
    next(error);
    console.error(error.message);
  }
};

module.exports = {
  createBook,
  getAllBooks,
};
