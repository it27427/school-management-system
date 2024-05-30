const express = require('express');
const router = express.Router();
const {
  createEvents,
  getAllEvents,
} = require('../controllers/student.controller');

router.post('/create', createEvents);
router.get('/getall', getAllEvents);

module.exports = router;
