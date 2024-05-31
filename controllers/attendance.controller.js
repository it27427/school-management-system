const Attendance = require('../models/attendance.model');
const { handleValidationError } = require('../middlewares/error.handler');

const markAttendance = async (req, res, next) => {
  const { attendanceDate } = req.body;

  try {
    if (
      !attendanceDate ||
      !Array.isArray(attendanceDate) ||
      attendanceDate.length === 0
    ) {
      handleValidationError('Attendance Date is Missing', 400);
    }

    const attendanceRecords = await Promise.all(
      attendanceDate.map(async (record) => {
        const { student, status } = record;

        return await Attendance.create({ student, status });
      })
    );

    res.status(201).json({
      success: true,
      message: 'Attendance Marked Successfully!',
      attendanceRecords,
    });
  } catch (error) {
    next(error);
    console.error(error.message);
  }
};

const getAllAttendances = async (req, res, next) => {
  try {
    const attendances = await Attendance.find().populate(
      'student',
      'name registrationNumber grade'
    );
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
  markAttendance,
  getAllAttendances,
};
