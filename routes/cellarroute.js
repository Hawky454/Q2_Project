let env = process.env.NODE_ENV || 'development';
let router = require('express').Router();
let config = require('../knexfile.js')[env];
let knex = require('knex')(config);


router.get('/cellar', (req, res, next) => {
  console.log("we got to the CELLAR route, this brings up the cellar.html page so that I am able to populate it with items from database. Using main.js");
  knex('cellar')
    .orderBy('id')
    .then((cellar) => {
      console.log(cellar);
      res.send(cellar);
    })
    .catch((err) => {
      next(err);
    });
});

module.exports = router;
