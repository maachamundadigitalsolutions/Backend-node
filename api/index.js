const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.json({
    success: true,
    message: 'Welcome to the Express API on Vercel!',
    data: {
      name: 'Vishnu Solanki',
      role: 'MERN Stack Developer',
      company: 'Maa Chamunda Digital Solutions',
      website: 'https://maachamundadigitalsolutions.com'
    }
  });
});

module.exports = app;
