const express = require('express');
const { createParty } = require('../controllers/partyController');
const { protect } = require('../middlewares/authMiddleware');

const router = express.Router();

// Create a new party - protected route
router.post('/', protect, createParty);

// Add more party routes as needed

module.exports = router;