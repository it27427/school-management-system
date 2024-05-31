const express = require('express');
const router = express.Router();

const {
  createTeacher,
  getAllTeachers,
} = require('../controllers/teacher.controller');

router.post('/', createTeacher);
router.get('/getall', getAllTeachers);

module.exports = router;
