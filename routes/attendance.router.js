const express = require('express');
const router = express.Router();

const {
  markAttendance,
  getAllAttendances,
} = require('../controllers/attendance.controller');

router.post('/', markAttendance);
router.get('/getall', getAllAttendances);

module.exports = router;
