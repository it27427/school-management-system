const mongoose = require('mongoose');

const eventSchema = new mongoose.Schema(
  {
    event: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

const Event = mongoose.model('Event', eventSchema);

module.exports = Event;
