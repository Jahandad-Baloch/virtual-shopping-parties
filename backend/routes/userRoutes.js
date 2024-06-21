const express = require('express');
const { getUserProfile } = require('../controllers/userController');
const { protect } = require('../config/auth');

const router = express.Router();

// Profile route - protected
router.get('/profile', protect, getUserProfile);

// Add more user routes as needed

module.exports = router;