const Event = require('../models/event.model');
const { handleValidationError } = require('../middlewares/error.handler');

const createEvent = async (req, res, next) => {
  const { event } = req.body;

  try {
    if (!event) {
      handleValidationError('Please fill up full form', 400);
    }

    await Event.create({ event });

    res.status(201).json({
      success: true,
      message: 'Event Created Successfully!',
    });
  } catch (error) {
    next(error);
    console.error(error.message);
  }
};

const getAllEvents = async (req, res, next) => {
  try {
    const event = await Event.find();
    res.status(200).json({
      success: true,
      event,
    });
  } catch (error) {
    next(error);
    console.error(error.message);
  }
};

module.exports = {
  createEvent,
  getAllEvents,
};
