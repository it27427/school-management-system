const mongoose = require('mongoose');

const examSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true,
    },
    registrationNumber: {
      type: String,
      required: true,
      unique: true,
    },
    grade: {
      type: String,
      required: true,
    },
    marks: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

const Exam = mongoose.model('Exam', examSchema);

module.exports = Exam;
