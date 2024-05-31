const Exam = require('../models/exam.model');
const { handleValidationError } = require('../middlewares/error.handler');

const createExam = async (req, res, next) => {
  const { name, registrationNumber, grade, marks } = req.body;

  try {
    if (!name || !registrationNumber || !grade || !marks) {
      handleValidationError('Please fill up full form', 400);
    }

    await Exam.create({ name, registrationNumber, grade, marks });
    res.status(201).json({
      success: true,
      message: 'Exam Created Successfully!',
    });
  } catch (error) {
    next(error);
    console.error(error.message);
  }
};

const getAllExams = async (req, res, next) => {
  try {
    const exams = await Exam.find();
    res.status(200).json({
      success: true,
      exams,
    });
  } catch (error) {
    next(error);
    console.error(error.message);
  }
};

module.exports = {
  createExam,
  getAllExams,
};
