'use strict'

let fs = require('fs');
let path = require('path');
let knexPath = path.join(__dirname, 'knexfile.js');
let express = require('express');
let app = express();
let bodyParser = require('body-parser');
let port = process.env.PORT || 8000;
let env = process.env.NODE_ENV || 'development';
let morgan = require('morgan');


let config = require(knexPath)[env];
let knex = require('knex')(config);
let cellar = require('./routes/cellarroute.js');


app.disable('x-powered-by');
app.use(morgan('short'));

app.use(bodyParser.json());
app.use(express.static(path.join('public')));


app.use(cellar);
// app.use(route2);


app.use((_req, res) => {
    res.sendStatus(404);
  });

app.use((err, _req, res, _next) => {
    if (err.status) {
      return res
        .status(err.status)
        .set('Content-Type', 'text/plain')
        .send(err.message);
    }
});

app.listen(port, function () {
    console.log('Listening on port', port);
});

module.exports = app;
