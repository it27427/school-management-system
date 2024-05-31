const express = require('express');
const router = express.Router();

const {
  createAttendance,
  getAllAttendances,
} = require('../controllers/attendance.controller');

router.post('/', createAttendance);
router.get('/getall', getAllAttendances);

module.exports = router;
