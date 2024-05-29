const Student = require('../models/student.model');
const { handleValidationError } = require('../middlewares/error.handler');

const createStudent = async (req, res, next) => {
  const { name, registrationNumber, grade } = req.body;

  try {
    if (!name || !registrationNumber || !grade) {
      handleValidationError('Please fill up full form', 400);
    }

    await Student.create({ name, registrationNumber, grade });
    res.status(201).json({
      success: true,
      message: 'Student Created Successfully!',
    });
  } catch (error) {
    next(error);
    console.error(error.message);
  }
};

const getAllStudents = async (req, res, next) => {
  try {
    const students = await Student.find();
    res.status(200).json({
      success: true,
      students,
    });
  } catch (error) {
    next(error);
    console.error(error.message);
  }
};

module.exports = {
  createStudent,
  getAllStudents,
};
