const dotenv = require('dotenv');

// Load environment variables from .env file
dotenv.config();

/** @type {import('next').NextConfig} */
const nextConfig = {
  basePath: process.env.BASE_PATH || '',
  // Rest of your next.config.js configuration
};

module.exports = nextConfig;