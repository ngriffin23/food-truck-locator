const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const PORT = process.env.PORT || 4000;

// setup db
const db = require('./models');

// setup routes
const routes = require('./routes');


// Middleware
// Serve Public Assets
app.use(express.static(__dirname + '/public'));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Custom Request Logger Middleware
app.use((req, res, next) => {
    const url = req.url;
    const method = req.method;
    const requestedAt = new Date().toLocaleTimeString();
    const result = `${method} ${url} ${requestedAt}`;
    console.log(result);
    next();
  });

// view routes : deliverd HTML
app.use('/', routes.views);

// api routes
app.use('/api/v1', routes.api);


// API Error 404
app.use('/api/*', (req, res) => {
    res.status(404).json({status: 404, error: 'Error 404: Resource not found'});
  });

  // HTML Error 404
app.use('*', (req, res) => {
    res.send('<h2>Error 404: Not Found</h2>');
  });



// start the server
app.listen(PORT, () => console.log(`Server running on port ${PORT}`)); 