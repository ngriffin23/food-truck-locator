const express = require('express');
// DONT FORGET TO INVOKE ROUTER()
const router = express.Router();

// DONT FORGET TO CHANGE APP TO ROUTER
router.get('/', (req, res) => {
  // Two Args: 1- Path to template, 2- root directory
  res.sendFile('views/index.html', {
    root: __dirname + '/../'
  });
});




// DONT FOREGET TO EXPORT THE ROUTER
module.exports = router;