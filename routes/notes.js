const express = require('express');
const { createNote, getNotes } = require('../controllers/noteController');
const auth = require('../middleware/auth');
const router = express.Router();

router.post('/', auth, createNote);
router.get('/', auth, getNotes);

module.exports = router;
