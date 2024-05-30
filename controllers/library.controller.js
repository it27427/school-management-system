const Library = require('../models/library.model');
const { handleValidationError } = require('../middlewares/error.handler');

const createLibrary = async (req, res, next) => {
  const { bookname, author } = req.body;

  try {
    if (!bookname || !author) {
      handleValidationError('Please fill up full form', 400);
    }

    await Library.create({ bookname, author });
    res.status(201).json({
      success: true,
      message: 'Library Created Successfully!',
    });
  } catch (error) {
    next(error);
    console.error(error.message);
  }
};

const getAllLibrary = async (req, res, next) => {
  try {
    const libraries = await Library.find();
    res.status(200).json({
      success: true,
      libraries,
    });
  } catch (error) {
    next(error);
    console.error(error.message);
  }
};

module.exports = {
  createLibrary,
  getAllLibrary,
};
