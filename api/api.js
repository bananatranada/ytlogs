const express = require('express');

const api = express();

api.get('*', (req, res) => {
  res.send(`<!doctype html><html><head></head>
      <body>helloooo</body>
    </html>
  `)
});

module.exports = api;
