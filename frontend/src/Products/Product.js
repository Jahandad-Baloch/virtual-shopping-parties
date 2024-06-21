const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'Please add a name for the product'],
    trim: true,
    maxlength: [100, 'Name cannot be more than 100 characters'],
  },
  description: {
    type: String,
    required: [true, 'Please add a description for the product'],
  },
  price: {
    type: Number,
    required: [true, 'Please add a price for the product'],
    min: [0, 'Price cannot be less than 0'],
  },
  stock: {
    type: Number,
    required: [true, 'Please add stock quantity for the product'],
    min: [0, 'Stock cannot be less than 0'],
  },
  imageUrl: {
    type: String,
    required: [true, 'Please add an image URL for the product'],
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
  // Add any other fields you find necessary for your application
});

module.exports = mongoose.model('Product', productSchema);