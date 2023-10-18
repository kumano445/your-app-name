// api/myApiEndpoint.js
const handler = (req, res) => {
  res.status(200).json({ message: 'Hello from API!' });
};

module.exports = handler;
