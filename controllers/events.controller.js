const Events = require('../models/events.model');
const { handleValidationError } = require('../middlewares/error.handler');

const createEvents = async (req, res, next) => {
  const { events } = req.body;

  try {
    if (!events) {
      handleValidationError('Please fill up full form', 400);
    }

    await Events.create({ events });
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
    const events = await Events.find();
    res.status(200).json({
      success: true,
      events,
    });
  } catch (error) {
    next(error);
    console.error(error.message);
  }
};

module.exports = {
  createEvents,
  getAllEvents,
};
