const Product = require('../models/Product');

// @desc    Create a new product
// @route   POST /api/products
// @access  Private
exports.createProduct = async (req, res) => {
  const { name, description, price, stock, imageUrl } = req.body;

  try {
    const product = await Product.create({
      name,
      description,
      price,
      stock,
      imageUrl,
    });

    res.status(201).json(product);
  } catch (error) {
    console.error(error);
    res.status(400).json({ message: 'Failed to create product' });
  }
};

// Add more product-related operations (e.g., list, update, delete) as needed