const express = require('express');
const app = express();
const bodyParser = require('body-parser');

// PORT
const PORT = process.env.PORT || 4000;

// setup db
const db = require('./models');

// setup routes
// const routes = require('./routes');

// Middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// view routes : deliverd HTML
// app.use('/', routes.views);

// api routes
// app.use('/api/v1', routes.api);

// start the server
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));