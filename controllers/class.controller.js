const Class = require('../models/class.model');
const { handleValidationError } = require('../middlewares/error.handler');

const createClass = async (req, res, next) => {
  const { grade } = req.body;

  try {
    if (!grade) {
      handleValidationError('Please fill up class', 400);
    }

    await Class.create({ grade });
    res.status(201).json({
      success: true,
      message: 'Class Created Successfully!',
    });
  } catch (error) {
    next(error);
    console.error(error.message);
  }
};

const getAllClasses = async (req, res, next) => {
  try {
    const grades = await Class.find();
    res.status(200).json({
      success: true,
      grades,
    });
  } catch (error) {
    next(error);
    console.error(error.message);
  }
};

module.exports = {
  createClass,
  getAllClasses,
};
