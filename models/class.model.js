const mongoose = require('mongoose');

const classSchema = new mongoose.Schema(
  {
    grade: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

const Class = mongoose.model('Classes', classSchema);

module.exports = Class;
