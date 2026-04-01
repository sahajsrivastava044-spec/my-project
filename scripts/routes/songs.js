const express = require('express');
const router = express.Router();

const { getSongsCursor } = require('../controllers/songController');

router.get('/songs', getSongsCursor);

module.exports = router;