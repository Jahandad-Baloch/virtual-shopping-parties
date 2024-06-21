const Party = require('../models/Party');

// @desc    Create a new party
// @route   POST /api/parties
// @access  Private
exports.createParty = async (req, res) => {
  const { title, description, date } = req.body;

  try {
    const party = await Party.create({
      title,
      description,
      date,
      host: req.user._id, // Assuming req.user is populated by the auth middleware
    });

    res.status(201).json(party);
  } catch (error) {
    console.error(error);
    res.status(400).json({ message: 'Failed to create party' });
  }
};

// Add more party-related operations (e.g., list, update, delete) as needed