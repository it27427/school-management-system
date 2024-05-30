const express = require('express');
const router = express.Router();

const {
  createAnnouncement,
  getAllAnnouncements,
} = require('../controllers/announcement.controller');

router.post('/', createAnnouncement);
router.get('/getall', getAllAnnouncements);

module.exports = router;
