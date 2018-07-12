let env = process.env.NODE_ENV || 'development';
let router = require('express').Router();
let config = require('../knexfile.js')[env];
let knex = require('knex')(config);


router.get('/pipes', (req, res, next) => {
  console.log("we got to the PIPES route, this brings up the pipes.html page so that I am able to populate it with items from database. Using main.js");
  knex('pipes')
    .orderBy('id')
    .then((pipes) => {
      console.log(pipes);
      res.send(pipes);
    })
    .catch((err) => {
      next(err);
    });
});

module.exports = router;
