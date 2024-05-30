const express = require('express');
const router = express.Router();

const {
  createLibrary,
  getAllLibrary,
} = require('../controllers/library.controller');

router.post('/create', createLibrary);
router.get('/getall', getAllLibrary);

module.exports = router;
