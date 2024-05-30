const express = require('express');
const router = express.Router();

const {
  createAssignment,
  getAllAssignments,
} = require('../controllers/assignment.controller');

router.post('/', createAssignment);
router.get('/getall', getAllAssignments);

module.exports = router;
