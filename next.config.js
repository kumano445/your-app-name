// next.config.js
const dotenv = require('dotenv');

// Load environment variables from .env file
dotenv.config();

module.exports = {
  basePath: process.env.BASE_PATH || '',
  // Rest of your next.config.js configuration
};
