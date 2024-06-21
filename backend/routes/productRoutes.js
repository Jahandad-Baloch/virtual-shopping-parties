const express = require('express');
const { createProduct } = require('../controllers/productController');
const { protect } = require('../middlewares/authMiddleware');

const router = express.Router();

// Create a new product - protected route
router.post('/', protect, createProduct);

// Add more product routes as needed

module.exports = router;