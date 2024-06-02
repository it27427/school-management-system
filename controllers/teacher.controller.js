const Teacher = require('../models/teacher.model');
const { handleValidationError } = require('../middlewares/error.handler');

const createTeacher = async (req, res, next) => {
  const { name, email, subject } = req.body;

  try {
    if (!name || !email || !subject) {
      handleValidationError('Please fill up full form', 400);
    }

    const teacher = await Teacher.create({ name, email, subject });
    res.status(201).json({
      success: true,
      message: 'Teacher Created Successfully!',
      teacher,
    });
  } catch (error) {
    next(error);
    console.error(error.message);
  }
};

const getAllTeachers = async (req, res, next) => {
  try {
    const teachers = await Teacher.find();
    res.status(200).json({
      success: true,
      teachers,
    });
  } catch (error) {
    next(error);
    console.error(error.message);
  }
};

module.exports = {
  createTeacher,
  getAllTeachers,
};
