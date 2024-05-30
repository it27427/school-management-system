const mongoose = require('mongoose');

const eventSchema = new mongoose.Schema({
  events: {
    type: String,
    required: true,
  },
});

const Events = mongoose.model('Events', eventSchema);

module.exports = Events;
