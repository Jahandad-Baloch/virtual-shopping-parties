const mongoose = require('mongoose');

const partySchema = new mongoose.Schema({
  title: {
    type: String,
    required: [true, 'Please add a title for the party'],
    trim: true,
    maxlength: [100, 'Title cannot be more than 100 characters'],
  },
  description: {
    type: String,
    required: [true, 'Please add a description for the party'],
  },
  host: {
    type: mongoose.Schema.ObjectId,
    ref: 'User',
    required: true,
  },
  participants: [{
    type: mongoose.Schema.ObjectId,
    ref: 'User',
  }],
  date: {
    type: Date,
    required: [true, 'Please add the date for the party'],
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
  // Add any other fields you find necessary for your application
});

module.exports = mongoose.model('Party', partySchema);