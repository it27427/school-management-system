const Assignment = require('../models/assignment.model');
const { handleValidationError } = require('../middlewares/error.handler');

const createAssignment = async (req, res, next) => {
  const { title, description, grade, deadline } = req.body;

  try {
    if (!title || !description || !grade || !deadline) {
      handleValidationError('Please fill up full form', 400);
    }

    // const formattedDate = deadline.slice(0, 10);

    const assignment = await Assignment.create({
      title,
      description,
      grade,
      deadline,
    });

    res.status(201).json({
      success: true,
      message: 'Assignment Created Successfully!',
      assignment,
    });
  } catch (error) {
    next(error);
    console.error(error.message);
  }
};

const getAllAssignments = async (req, res, next) => {
  try {
    const assignments = await Assignment.find();
    res.status(200).json({
      success: true,
      assignments,
    });
  } catch (error) {
    next(error);
    console.error(error.message);
  }
};

module.exports = {
  createAssignment,
  getAllAssignments,
};
