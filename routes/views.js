const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
  res.sendFile('views/index.html', {
    root: __dirname + '/../'
  });
});

router.get('/dashboard', (req, res) => {
  res.sendFile('views/dashboard.html', {
    root: __dirname + '/../'
  });
});


module.exports = router;