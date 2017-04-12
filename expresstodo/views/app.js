'use strict';
const express = require('express'),
    app = express(),
    bodyParser = require('body-parser');

// Set the views directory and template engine
app.set('views', __dirname + '/views');
app.set('view engine', 'jade');

// Set our static directory for public assets like client scripts
app.use(express.static('public'));

// Parses the body on incoming requests
app.use(bodyParser.json());

// Pretty prints HTML output
app.locals.pretty = true;

// Define our main route, HTTP "GET /" which will print "hello"
app.get('/', function (req, res) {
   res.send('hello');
});


// Start listening for connections
app.listen(3000, function (err) {
    if (err) {
        console.error('Cannot listen at port 3000', err);
    }
    console.log('Todo app listening at port 3000');
});
