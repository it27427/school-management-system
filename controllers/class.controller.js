const Class = require('../models/class.model');
const { handleValidationError } = require('../middlewares/error.handler');

const createClass = async (req, res, next) => {
  const { classname } = req.body;

  try {
    if (!classname) {
      handleValidationError('Please fill up class', 400);
    }

    await Class.create({ classname });
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
    const classes = await Class.find();
    res.status(200).json({
      success: true,
      classes,
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
