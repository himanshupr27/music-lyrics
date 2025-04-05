// routes/lyricsRoutes.js
const express = require('express');
const router = express.Router();
const lyricsController = require('../controllers/lyricsController');

// GET /api/lyrics?song=xyz&artist=abc
router.get('/', lyricsController.getLyrics);

module.exports = router;
