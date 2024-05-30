const express = require('express');
const router = express.Router();

const {
  createEvent,
  getAllEvents,
} = require('../controllers/event.controller');

router.post('/', createEvent);
router.get('/getall', getAllEvents);

module.exports = router;
