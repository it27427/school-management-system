const Announcement = require('../models/announcement.model');
const { handleValidationError } = require('../middlewares/error.handler');

const createAnnouncement = async (req, res, next) => {
  const { announcement } = req.body;

  try {
    if (!announcement) {
      handleValidationError('Please fill up full form', 400);
    }

    await Announcement.create({ announcement });

    res.status(201).json({
      success: true,
      message: 'Announcement Created Successfully!',
    });
  } catch (error) {
    next(error);
    console.error(error.message);
  }
};

const getAllAnnouncements = async (req, res, next) => {
  try {
    const announcements = await Announcement.find();
    res.status(200).json({
      success: true,
      announcements,
    });
  } catch (error) {
    next(error);
    console.error(error.message);
  }
};

module.exports = {
  createAnnouncement,
  getAllAnnouncements,
};
