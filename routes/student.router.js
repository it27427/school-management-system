const express = require('express');
const router = express.Router();

const {
  createStudent,
  getAllStudents,
} = require('../controllers/student.controller');

router.post('/', createStudent);
router.get('/getall', getAllStudents);

module.exports = router;
