const Exam = require('../models/exam.model');
const { handleValidationError } = require('../middlewares/error.handler');

const createExam = async (req, res, next) => {
  const { name, registrationNumber, className, marks } = req.body;

  try {
    if (!name || !registrationNumber || !className || !marks) {
      handleValidationError('Please fill up full form', 400);
    }

    const exam = await Exam.create({
      name,
      registrationNumber,
      className,
      marks,
    });
    res.status(201).json({
      success: true,
      message: 'Exam Created Successfully!',
      exam,
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
