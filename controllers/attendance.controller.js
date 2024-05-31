const Attendance = require('../models/attendance.model');
const { handleValidationError } = require('../middlewares/error.handler');

const createAttendance = async (req, res, next) => {
  const { title, description, grade, deadline } = req.body;

  try {
    if (!title || !description || !grade || !deadline) {
      handleValidationError('Please fill up full form', 400);
    }

    await Attendance.create({ title, description, grade, deadline });

    res.status(201).json({
      success: true,
      message: 'Attendance Created Successfully!',
    });
  } catch (error) {
    next(error);
    console.error(error.message);
  }
};

const getAllAttendances = async (req, res, next) => {
  try {
    const attendances = await Attendance.find();
    res.status(200).json({
      success: true,
      attendances,
    });
  } catch (error) {
    next(error);
    console.error(error.message);
  }
};

module.exports = {
  createAttendance,
  getAllAttendances,
};
