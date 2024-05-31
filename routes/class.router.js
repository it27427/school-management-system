const express = require('express');
const router = express.Router();

const {
  createClass,
  getAllClasses,
} = require('../controllers/class.controller');

router.post('/', createClass);
router.get('/getall', getAllClasses);

module.exports = router;
