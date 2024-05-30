const express = require('express');
const router = express.Router();

const {
  getAllBooks,
  createBook,
} = require('../controllers/library.controller');

router.post('/', createBook);
router.get('/getall', getAllBooks);

module.exports = router;
