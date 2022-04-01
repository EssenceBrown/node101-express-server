// import files and packages up here
var  express = require('express');
var morgan = require('morgan');
var bodyParser = require('body-parser');
var data = require('./data.json');

// create your express server below
var app = express();

// add your routes and middleware below
app.use(bodyParser.json());
app.use(morgan('dev'));
// route handeler for request to/
app.get('/', ( req, res) => {
    //console.log('here')
    res.status(200).send('hey its working')
});
  app.get('/data', (req, res) => {
     res.status(200).send(data);
  });
// listen for incoming connections


// finally export the express application
module.exports = app;
