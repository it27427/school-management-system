const express = require('express');
const router = express.Router();

const {
  createAnnouncement,
  getAllAnnouncements,
} = require('../controllers/announcement.controller');

router.post('/create', createAnnouncement);
router.get('/getall', getAllAnnouncements);

module.exports = router;
