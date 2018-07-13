'use strict'
console.log('hey we are here');
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
let open = require('./routes/openroute.js');
let add = require('./routes/addroute');
let pipes = require('./routes/pipesroute');
console.log('now we are here');
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.disable('x-powered-by');
app.use(morgan('short'));

app.use(bodyParser.json());
app.use(express.static(path.join('public')));
app.use(bodyParser.urlencoded({
    extended: true
}));

// app.get('/', (req, res, next) => {
//     res.render('add');
// });

//try this
// app.get('/', (req, res, next) => {
//     res.render('open');
// });

app.use(cellar);
app.use(open);
app.use(add);
app.use(pipes);

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

console.log('now we are all the way down here');
app.listen(port, function () {
    console.log('Listening on port', port);
});

module.exports = app;
