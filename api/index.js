// api/index.js
const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.send('Hello World from Express deployed on Vercel!');
});

// Export as Vercel serverless function
module.exports = app;
