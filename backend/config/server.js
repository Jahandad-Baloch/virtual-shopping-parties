const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const errorHandler = require('../middlewares/errorHandler');

dotenv.config();

const app = express();

// Middleware
app.use(express.json());

// Error Handler Middleware
app.use(errorHandler);

module.exports = app;