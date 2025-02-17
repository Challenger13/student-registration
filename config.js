// config.js
require('dotenv').config(); // Load environment variables from .env file

module.exports = {
    MONGO_URI: process.env.MONGO_URI,
    JWT_SECRET: process.env.JWT_SECRET,
    JWT_EXPIRES_IN: process.env.JWT_EXPIRES_IN,
    PORT: process.env.PORT || 5000
};
