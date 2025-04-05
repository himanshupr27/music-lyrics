// routes/blogRoutes.js
const express = require('express');
const router = express.Router();
const blogController = require('../controllers/blogController');
const { protect } = require('../middlewares/authMiddleware');

// Protected Route: Only logged-in users can create blogs
router.post('/', protect, blogController.createBlog);

// Public Route: Anyone can read blogs
router.get('/', blogController.getBlogs);

module.exports = router;
