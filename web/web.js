const express = require('express');

const web = express();

web.get('*', (req, res) => {
  res.send(`<!doctype html><html><head></head>
      <body>helloooo web</body>
    </html>
  `)
});

web.listen(3000, (req, res) => {
  console.log('web started on 3000')
})
