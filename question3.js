// Import express module
const express = require('express');
const app = express();

// Define the port
const PORT = 3000;

// Create a route for /test
app.get('/test', (req, res) => {
  res.json({ message: 'Express is working! Ivan Nellas' });
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
