'use strict';

const express = require('express'),
    api = require('./api'),
    app = express(),
    bodyParser = require('body-parser');

// Set the views directory and template engine
app.set('views', __dirname + '/views');
app.set('view engine', 'pug');

// Set our static dire222ctory for public assets like client scripts
app.use(express.static('public'));

// Parses the body on incoming requests
app.use(bodyParser.json());

// Pretty prints HTML output
app.locals.pretty = true;

// Define our main route, HTTP "GET /" which will print "hello"
app.get('/', function (req, res) {
   res.render('index');
});

//tag route handler
app.get('/tags/:name.tag', function(req, res) {
  var name = 'tag-' + req.params.name;
  res.render('../client/' + name);
});

// Mount the api sub application
app.use('/api/todos/', api);

// Start listening for connections
app.listen(3000, function (err) {
    if (err) {
        console.error('Cannot listen at port 3000', err);
    }
    console.log('Todo app listening at port 3000');
});
