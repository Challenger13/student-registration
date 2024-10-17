// controllers/authController.js
const Student = require('../models/studentModel'); // Update this with your model path
const jwt = require('jsonwebtoken');
const { JWT_SECRET, JWT_EXPIRES_IN } = require('../config');

// Registration
exports.register = async (req, res) => {
    // Your registration logic here
};

// Login
exports.login = async (req, res) => {
    // Your login logic here
};
