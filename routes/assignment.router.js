const express = require('express');
const router = express.Router();

const {
  createAssignment,
  getAllAssignments,
} = require('../controllers/event.controller');

router.post('/create', createAssignment);
router.get('/getall', getAllAssignments);

module.exports = router;
