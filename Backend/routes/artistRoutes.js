const express = require('express');
const router = express.Router();
const artistController = require('../controllers/artistController');

router.get('/artist-info', artistController.getArtistDetails);

module.exports = router;
